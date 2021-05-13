// packages redux
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// global reducer
import reducer from 'src/reducers';
// middlewares
import login from '../middlewares/login';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(
    login,
  ),
));

export default store;
