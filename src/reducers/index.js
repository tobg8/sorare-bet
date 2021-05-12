// global reducer
import { combineReducers } from 'redux';
import connection from './connection';

const globalReducer = combineReducers({
  // reducers
  connection,
});

export default globalReducer;
