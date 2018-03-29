import {
  FETCHING_USER_POSTS,
  FETCHING_USER_POSTS_SUCCESS,
  FETCHING_USER_POSTS_ERROR,
  SET_SELECTED_POST,
  FETCHING_POSTS_COMMENTS,
  FETCHING_POST_COMMENTS_SUCCESS,
  FETCHING_POST_COMMENTS_ERROR,
  FETCHING_USER_DETAILS,
  FETCHING_USER_DETAILS_SUCCESS,
  FETCHING_USER_DETAILS_ERROR
} from '../actions/posts.actions';

const initialState = {
  posts: [],
  comments: [],
  user: null,
  selectedPost: null,
  isFetchingPosts: false,
  isFetchingComments: false,
  isFetchingUser: false
};

export default function postsUpdate(state = initialState, { type, payload }) {
  switch (type) {
  case FETCHING_USER_POSTS:
    return { ...state, posts: null, comments: null, isFetchingPosts: true };
  case FETCHING_USER_POSTS_SUCCESS:
    return { ...state, posts: payload, isFetchingPosts: false };
  case FETCHING_USER_POSTS_ERROR:
    return { ...state, isFetchingPosts: false };
  case SET_SELECTED_POST:
    return { ...state, comments: null, isFetchingPosts: false, isFetchingComments: false, selectedPost: payload };
  case FETCHING_POSTS_COMMENTS:
    return { ...state, comments: null, isFetchingComments: true };
  case FETCHING_POST_COMMENTS_SUCCESS:
    return { ...state, comments: payload, isFetchingComments: false };
  case FETCHING_POST_COMMENTS_ERROR:
    return { ...state, comments: null, isFetchingComments: false };
  case FETCHING_USER_DETAILS:
    return { ...state, user: null, isFetchingUser: true };
  case FETCHING_USER_DETAILS_SUCCESS:
    return { ...state, user: payload, isFetchingUser: false };
  case FETCHING_USER_DETAILS_ERROR:
    return { ...state, user: null, isFetchingUser: false };
  default:
    return state;
  }
}
