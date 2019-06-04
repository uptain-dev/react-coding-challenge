export const FETCH_SUBJECTS = '@chin2km/FETCH_SUBJECTS';
export const SET_SUBJECTS = '@chin2km/SET_SUBJECTS';
export const SET_SELECTED_SUBJECT = '@chin2km/SET_SELECTED_SUBJECT';

export const FETCH_BOOKS = '@chin2km/FETCH_BOOKS';
export const SET_BOOKS = '@chin2km/SET_BOOKS';
export const SET_SELECTED_BOOK = '@chin2km/SET_SELECTED_BOOK';
export const SAVE_BOOK = '@chin2km/SAVE_BOOK';

export const ACTIONS = {
  fetchSubjects() {
    return {
      type: FETCH_SUBJECTS
    };
  },
  setSubjects(subjects) {
    return {
      type: SET_SUBJECTS,
      payload: subjects
    };
  },
  setSelectedSubject(subject) {
    return {
      type: SET_SELECTED_SUBJECT,
      payload: subject
    };
  },

  setBooks(books) {
    return {
      type: SET_BOOKS,
      payload: books
    };
  },
  setSelectedBook(book) {
    return {
      type: SET_SELECTED_BOOK,
      payload: book
    };
  },
  saveBook(book) {
    return {
      type: SAVE_BOOK,
      payload: book
    };
  }
};
