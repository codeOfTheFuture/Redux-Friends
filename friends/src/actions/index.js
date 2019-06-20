import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_FAILURE';

// export const login = () => dispatch => {
//   dispatch({ type: LOGIN_START });
//   axios
//     .post('http://localhost:5000/api/login', body)
//     .then(res => {
//       console.log('login res...', res);
//       dispatch({ type: LOGIN_SUCCESS, payload: res.body });
//     })
//     .catch(err => {
//       dispatch({ type: LOGIN_ERROR, payload: err });
//     });
// };

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_ERROR = 'FETCH_FRIENDS_ERROR';

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  axios
    .get('http://localhost:5000/api/friends')
    .then(res => {
      console.log('Get Friends...', res);
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.friends });
    })
    .catch(err => {
      console.log('Get Friends Err...', err);
      dispatch({ type: FETCH_FRIENDS_ERROR, payload: err });
    });
};
