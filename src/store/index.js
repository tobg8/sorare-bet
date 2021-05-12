// packages redux
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// global reducer
import reducer from 'src/reducers';
// middlewares

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(),
));

export default store;
