// packages redux
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// global reducer
import reducer from 'src/reducers';
// middlewares
import login from '../middlewares/login';
import user from '../middlewares/user';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(
    login,
    user,
  ),
));

export default store;
