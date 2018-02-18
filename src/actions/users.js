import api from '../api';
import { userLoggedIn } from './auth';
//thunk action
export const signup = (data) => (dispatch) =>
api.user.signup(data).then(user => dispatch(userLoggedIn(user)))
