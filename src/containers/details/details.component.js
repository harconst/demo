import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import withWidth, { isWidthUp } from 'material-ui/utils/withWidth';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import ListIcon from 'material-ui-icons/List';
import Hidden from 'material-ui/Hidden';

import PostsList from './posts-list/posts-list.component';

import LayoutLoader from '../../layouts/components/layout-loader/layout-loader.component';

import { fetchUserPosts, fetchUserDetails, selectPost, backToList } from '../../actions/posts.actions';

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
      isFetchingComments,
      selectedPost,
      comments,
      user
    } = postsState;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <PostsList
            user={user}
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
            {isFetchingComments && <div className={classes.centered}><LayoutLoader /></div>}
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
            {selectedPost &&
              <Hidden mdUp>
                <Button
                  variant="fab"
                  color="secondary"
                  aria-label="compose"
                  className={classes['back-fab']}
                  onClick={() => this.props.backToList()}
                >
                  <ListIcon className={classes['portal-note-cancel-fab__icon']} />
                </Button>
              </Hidden>}
            {!selectedPost && !isFetchingComments && <div className={classes.centered}><Typography variant="headline">Please select a post</Typography></div>}
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
  backToList: PropTypes.func.isRequired,
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
    selectPost,
    backToList
  })
)(Details);
