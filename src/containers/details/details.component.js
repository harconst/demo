import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import withWidth, { isWidthUp } from 'material-ui/utils/withWidth';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import AddCircleIcon from 'material-ui-icons/AddCircle';

import PostsList from './posts-list/posts-list.component';

import LayoutLoader from '../../layouts/components/layout-loader/layout-loader.component';

import { fetchUserPosts } from '../../actions/posts.actions';

import styles from './details.style';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null
    };
  }

  componentDidMount() {
    this.props.fetchUserPosts(this.props.match.params.number);
  }

  selectPost = post => () => {
    this.setState({ selectedPost: post });
  }

  render() {
    const { classes, postsState, width } = this.props;
    const { posts, isFetchingPosts } = postsState;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <PostsList
            selectedPost={this.state.selectedPost}
            list={posts}
            onSelect={this.selectPost}
          />
          <main
            className={classNames(classes.content, classes['content-left'], 'util-hide-scrollbars', {
              [classes.contentShift]: (isWidthUp('md', width)),
              [classes['contentShift-left']]: isWidthUp('md', width)
            })}
          >
            {this.state.selectedPost ? 'lorem' : 'ipsium'
            }
          </main>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  fetchUserPosts: PropTypes.func.isRequired,
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
    fetchUserPosts
  })
)(Details);
