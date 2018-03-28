import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';

import { fetchUserPosts } from '../../actions/posts.actions';

import styles from './details.style';

class Details extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    // this.props.fetchUsers();
    console.log(this.props.match.params.number);
    this.props.fetchUserPosts(this.props.match.params.number);
  }

  render() {
    const { classes, postsState } = this.props;
    const { posts, isFetching } = postsState;

    return (
      <div>
        <p>
          Details Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }
}

Details.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  // fetchUsers: PropTypes.func.isRequired,
  fetchUserPosts: PropTypes.func.isRequired,
  postsState: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
  return {
    postsState: state.postsState
  };
}

export default compose(
  // withRouter,
  // withWidth(),
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, {
    fetchUserPosts
  })
)(Details);
