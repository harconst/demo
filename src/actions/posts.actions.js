export const FETCHING_USER_POSTS = 'FETCHING_USER_POSTS';
export const FETCHING_USER_POSTS_SUCCESS = 'FETCHING_USER_POSTS_SUCCESS';
export const FETCHING_USER_POSTS_ERROR = 'FETCHING_USER_POSTS_ERROR';

export const SET_SELECTED_POST = 'SET_SELECTED_POST';
export const FETCHING_POSTS_COMMENTS = 'FETCHING_POSTS_COMMENTS';
export const FETCHING_POST_COMMENTS_SUCCESS = 'FETCHING_POST_COMMENTS_SUCCESS';
export const FETCHING_POST_COMMENTS_ERROR = 'FETCHING_POST_COMMENTS_ERROR';

export const FETCHING_USER_DETAILS = 'FETCHING_USER_DETAILS';
export const FETCHING_USER_DETAILS_SUCCESS = 'FETCHING_USER_DETAILS_SUCCESS';
export const FETCHING_USER_DETAILS_ERROR = 'FETCHING_USER_DETAILS_ERROR';

export const fetchUserPosts = id => (dispatch) => {
  dispatch({
    type: FETCHING_USER_POSTS
  });

  return fetch(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(value =>
      dispatch({
        type: FETCHING_USER_POSTS_SUCCESS,
        payload: value
      }))
    .catch(() => {
      dispatch({
        type: FETCHING_USER_POSTS_ERROR
      });
    });
};

export const selectPost = post => (dispatch) => {
  dispatch({
    type: SET_SELECTED_POST,
    payload: post
  });

  dispatch({
    type: FETCHING_POSTS_COMMENTS
  });

  return fetch(`http://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(value =>
      dispatch({
        type: FETCHING_POST_COMMENTS_SUCCESS,
        payload: value
      }))
    .catch(() => {
      dispatch({
        type: FETCHING_POST_COMMENTS_ERROR
      });
    });
};


export const fetchUserDetails = id => (dispatch) => {
  dispatch({
    type: FETCHING_USER_DETAILS
  });

  return fetch(`http://jsonplaceholder.typicode.com/users?id=${id}`)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(value =>
      dispatch({
        type: FETCHING_USER_DETAILS_SUCCESS,
        payload: value
      }))
    .catch(() => {
      dispatch({
        type: FETCHING_USER_DETAILS_ERROR
      });
    });
};

export const backToList = () => (dispatch) => {
  dispatch({
    type: SET_SELECTED_POST,
    payload: null
  });
};
