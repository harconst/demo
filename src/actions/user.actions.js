export const FETCHING_USERS_AND_POSTS = 'FETCHING_USERS_AND_POSTS';
export const FETCHING_USERS_AND_POSTS_SUCCESS =
  'FETCHING_USERS_AND_POSTS_SUCCESS';
export const FETCHING_USERS_AND_POSTS_ERROR = 'FETCHING_USERS_AND_POSTS_ERROR';
export const HANDLE_REQUEST_SORT = 'HANDLE_REQUEST_SORT';

// All needed fetches combined in one action creator.
export const fetchUsers = () => (dispatch) => {
  dispatch({
    type: FETCHING_USERS_AND_POSTS
  });

  const users = fetch('http://jsonplaceholder.typicode.com/users')
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json());

  const posts = fetch('http://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json());

  const comments = fetch('http://jsonplaceholder.typicode.com/comments')
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json());

  Promise.all([users, posts, comments])
    .then((values) => {
      dispatch({
        type: FETCHING_USERS_AND_POSTS_SUCCESS,
        payload: values
      });
    })
    .catch(() => {
      dispatch({
        type: FETCHING_USERS_AND_POSTS_ERROR
      });
    });
};

export const handleRequestSort = property => (dispatch) => {
  dispatch({
    type: HANDLE_REQUEST_SORT,
    payload: property
  });
};
