// packages redux
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// global reducer
import reducer from 'src/reducers';
// middlewares
import login from '../middlewares/login';
import user from '../middlewares/user';
import games from '../middlewares/games';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(
    login,
    user,
    games,
  ),
));

export default store;
