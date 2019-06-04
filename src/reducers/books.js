import { SET_BOOKS, SET_SELECTED_BOOK, SET_SUBJECTS } from './actions';

export const booksInitialState = {
  list: [{ title: '--select--' }],
  selected: null
};

export const books = (state = booksInitialState, action) => {
  const newState = {
    [SET_BOOKS]: () => ({ ...state, list: [{ title: '--select--' }, ...action.payload], selected: null }),
    [SET_SUBJECTS]: () => ({ ...booksInitialState }),
    [SET_SELECTED_BOOK]: () => ({ ...state, selected: action.payload })
  }[action.type];
  return newState ? newState() : state;
};
