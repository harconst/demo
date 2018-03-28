import {
  FETCHING_USER_POSTS,
  FETCHING_USER_POSTS_SUCCESS,
  FETCHING_USER_POSTS_ERROR
} from '../actions/posts.actions';

const initialState = {
  posts: [],
  isFetching: false
};

export default function postsUpdate(state = initialState, { type, payload }) {
  switch (type) {
    case FETCHING_USER_POSTS:
      return { ...state, isFetching: true };
    case FETCHING_USER_POSTS_SUCCESS:
      return { ...state, posts: payload, isFetching: false };
    case FETCHING_USER_POSTS_ERROR:
      return { ...state, isFetching: false };
    default:
      return state;
  }
}
