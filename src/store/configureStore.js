import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import subjects from '../reducers/subjects';
import books from '../reducers/books';
import bookDetails from '../reducers/bookDetails';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(combineReducers({
    subjects: subjects,
    books: books,
    bookDetails: bookDetails
  }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};