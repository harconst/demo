import {
  FETCHING_USER_POSTS,
  FETCHING_USER_POSTS_SUCCESS,
  FETCHING_USER_POSTS_ERROR
} from '../actions/posts.actions';

const initialState = {
  posts: [],
  isFetchingPosts: false
};

export default function postsUpdate(state = initialState, { type, payload }) {
  switch (type) {
  case FETCHING_USER_POSTS:
    return { posts: [], isFetchingPosts: true };
  case FETCHING_USER_POSTS_SUCCESS:
    return { ...state, posts: payload, isFetchingPosts: false };
  case FETCHING_USER_POSTS_ERROR:
    return { ...state, isFetchingPosts: false };
  default:
    return state;
  }
}
