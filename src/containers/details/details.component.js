import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import withWidth, { isWidthUp } from 'material-ui/utils/withWidth';
import Card, { CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import AddCircleIcon from 'material-ui-icons/AddCircle';

import PostsList from './posts-list/posts-list.component';

import LayoutLoader from '../../layouts/components/layout-loader/layout-loader.component';

import { fetchUserPosts, fetchUserDetails, selectPost } from '../../actions/posts.actions';

import styles from './details.style';

class Details extends Component {
  componentDidMount() {
    this.props.fetchUserPosts(this.props.match.params.number);
    this.props.fetchUserDetails(this.props.match.params.number);
  }

  selectPost = post => () => {
    this.props.selectPost(post);
  }

  render() {
    const { classes, postsState, width } = this.props;
    const {
      posts,
      isFetchingPosts,
      isFetchingComments,
      isFetchingUser,
      selectedPost,
      comments,
      user
    } = postsState;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <PostsList
            selectedPost={selectedPost}
            list={posts}
            onSelect={this.selectPost}
          />
          <main
            className={classNames(classes.content, classes['content-left'], 'util-hide-scrollbars', {
              [classes.contentShift]: (isWidthUp('md', width)),
              [classes['contentShift-left']]: isWidthUp('md', width)
            })}
          >
            {isFetchingComments && 'Loading'}
            {selectedPost && comments && comments.map(comment => (
              <Card
                key={comment.id}
                classes={{
                  root: classes.card
                }}
              >
                <CardContent>
                  <Typography className={classes.title} color="textSecondary">
                    {comment.name}
                  </Typography>
                  <Typography component="div" dangerouslySetInnerHTML={{ __html: comment.body }} />
                </CardContent>
              </Card>
            ))}
            {!selectedPost && !isFetchingComments && 'Please select a post'}
          </main>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  fetchUserPosts: PropTypes.func.isRequired,
  fetchUserDetails: PropTypes.func.isRequired,
  selectPost: PropTypes.func.isRequired,
  postsState: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      number: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

function mapStateToProps(state) {
  return {
    postsState: state.postsState
  };
}

export default compose(
  // withRouter,
  withWidth(),
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, {
    fetchUserPosts,
    fetchUserDetails,
    selectPost
  })
)(Details);
