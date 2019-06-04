import { combineReducers } from 'redux';
import { books, booksInitialState } from './books';
import { subjects, subjectsInitialState } from './subjects';

export const rootInitialState = {
  subjects: subjectsInitialState,
  books: booksInitialState
};

export const rootReducers = combineReducers({ books, subjects });
