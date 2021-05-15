// global reducer
import { combineReducers } from 'redux';
import connection from './connection';
import userData from './userData';
import app from './app';

const globalReducer = combineReducers({
  // reducers
  connection,
  userData,
  app,
});

export default globalReducer;
