import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import types from './types';
import search from './search';

export default createStore(
  combineReducers({
    types,
    search,
  }),
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);
