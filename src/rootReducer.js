import { combineReducers } from 'redux';
import user from './reducers/user';
import books from './reducers/books';
//reducers take state and return new state - combined into rootreducer for the whole tree
export default combineReducers({
  user,
  books
})
