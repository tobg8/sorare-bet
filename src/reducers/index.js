// global reducer
import { combineReducers } from 'redux';
import connection from './connection';
import userData from './userData';

const globalReducer = combineReducers({
  // reducers
  connection,
  userData,
});

export default globalReducer;
