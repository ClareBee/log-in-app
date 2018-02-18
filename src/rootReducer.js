import { combineReducers } from 'redux';
import user from './reducers/user';
//reducers take state and return new state - combined into rootreducer for the whole tree
export default combineReducers({
  user
})
