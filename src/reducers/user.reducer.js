import {
  FETCHING_USERS_AND_POSTS,
  FETCHING_USERS_AND_POSTS_SUCCESS,
  FETCHING_USERS_AND_POSTS_ERROR,
  HANDLE_REQUEST_SORT
} from '../actions/user.actions';

const initialState = {
  users: [],
  isFetching: false,
  order: 'asc',
  orderBy: 'ratio'
};

export default function usersUpdate(state = initialState, { type, payload }) {
  switch (type) {
  case FETCHING_USERS_AND_POSTS:
    return { ...state, isFetching: true };
  case FETCHING_USERS_AND_POSTS_SUCCESS: {
    // construct user array that contains posts and comments number. Use lookup tables.
    const users = Object.assign(
      {},
      ...payload[0].map(user => ({
        [user.id]: { ...user, posts: 0, comments: 0, ratio: 0 }
      }))
    );
    const posts = Object.assign(
      {},
      ...payload[1].map(post => ({ [post.id]: { ...post, comments: 0 } }))
    );
    payload[2].forEach((comment) => {
      posts[comment.postId].comments += 1;
    });

    Object.keys(posts).forEach((id) => {
      users[posts[id].userId].posts += 1;
      users[posts[id].userId].comments += posts[id].comments;
      users[posts[id].userId].ratio =
        users[posts[id].userId].comments / users[posts[id].userId].posts;
    });

    return { ...state, users: Object.values(users), isFetching: false };
  }
  case FETCHING_USERS_AND_POSTS_ERROR:
    return { ...state, isFetching: false };
  case HANDLE_REQUEST_SORT: {
    const orderBy = payload;
    let order = 'desc';

    if (state.orderBy === orderBy && state.order === 'desc') {
      order = 'asc';
    }

    const users =
      order === 'desc'
        ? state.users.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
        : state.users.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));
    return { ...state, users, order, orderBy };
  }
  default:
    return state;
  }
}
