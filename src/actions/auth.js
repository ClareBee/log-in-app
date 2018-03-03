//thunk actions = a function that returns another function
import { USER_LOGGED_IN } from '../types';
import { USER_LOGGED_OUT } from '../types';
import api from '../api';
import setAuthorizationHeader from '../utils/setAuthorizationHeader';

//actions need to be handled by reducer - to place user data into state/remove it
export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});
export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const login = credentials => dispatch =>
//api request -> get data -> dispatch redux action to change store
  api.user.login(credentials).then(user => {
    //saves token in local storage
    localStorage.bookwormJWT = user.token;
    setAuthorizationHeader(user.token);
    dispatch(userLoggedIn(user));
  });

export const logout = () => dispatch => {
    localStorage.removeItem('bookwormJWT');
    dispatch(userLoggedOut());
    // no params = deletes token
    setAuthorizationHeader();
  }

export const confirm = (token) => dispatch =>
    api.user.confirm(token)
    .then(user => {
      localStorage.bookwormJWT = user.token;
      dispatch(userLoggedIn(user))
    })

export const resetPasswordRequest = ({email}) => () =>
  api.user.resetPasswordRequest(email)

export const validateToken = (token) => () =>
  api.user.validateToken(token)

export const resetPassword = (data) => () =>
  api.user.resetPassword(data)
