//thunk actions = a function that returns another function
import { USER_LOGGED_IN } from '../types';
import api from '../api';

//action needs to be handled by reducer - to place user data into state
export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const login = credentials => dispatch =>
//api request -> get data -> dispatch redux action to change store
  api.user.login(credentials).then(user => {
    //saves token in local storage
    localStorage.bookwormJWT = user.token;
    dispatch(userLoggedIn(user))
  });
