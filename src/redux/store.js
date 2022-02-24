import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import booksReducer from './books/book';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

// store.dispatch(displayBooks());
export default store;
