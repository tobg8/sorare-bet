// global reducer
import { combineReducers } from 'redux';
import connection from './connection';
import userData from './userData';
import app from './app';
import showTeams from './showTeams';

const globalReducer = combineReducers({
  // reducers
  connection,
  userData,
  app,
  showTeams,
});

export default globalReducer;
