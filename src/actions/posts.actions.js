export const FETCHING_USER_POSTS = 'FETCHING_USER_POSTS';
export const FETCHING_USER_POSTS_SUCCESS = 'FETCHING_USER_POSTS_SUCCESS';
export const FETCHING_USER_POSTS_ERROR = 'FETCHING_USER_POSTS_ERROR';

// All needed fetches combined in one action creator.
export const fetchUserPosts = id => dispatch => {
  dispatch({
    type: FETCHING_USER_POSTS
  });

  return fetch(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then(response => {
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
      })
    )
    .catch(() => {
      dispatch({
        type: FETCHING_USER_POSTS_ERROR
      });
    });
};
