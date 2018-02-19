import api from '../api';
import { userLoggedIn } from './auth';
//thunk action
export const signup = (data) => (dispatch) =>
api.user.signup(data).then(user => {
  //adding to local storage to keep signed in if page refreshed
  localStorage.bookwormJWT = user.token,
  dispatch(userLoggedIn(user));
});
