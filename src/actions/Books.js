
import { put, get } from '../utils/Helper';

export const showEditForm = (isFormEnabled) => dispatch => dispatch({
    type: "SHOW_EDIT_FORM",
    payload: isFormEnabled
});

export const getBooks = () => dispatch =>
    get(
        `http://localhost:3010/books`,
        dispatch
    ).then(response => {
        response &&
            dispatch({
                type: "GET_BOOKS",
                payload: response
            });
    });

export const getSubjects = () => dispatch =>
    get(
        `http://localhost:3010/subjects`,
        dispatch
    ).then(response => {
        response &&
            dispatch({
                type: "GET_SUBJECTS",
                payload: response
            });
    });

export const getBook = (id) => dispatch =>
    get(
        `http://localhost:3010/books/${id}`,
        dispatch
    ).then(response => {
        response &&
            dispatch({
                type: "GET_BOOK",
                payload: response
            });

        response && dispatch({
            type: "SHOW_EDIT_FORM",
            payload: true
        });
    });

export const setSelectedSubject = (subject) => dispatch => dispatch({
    type: "SELECTED_SUBJECT",
    payload: subject
});


export const saveEditedBook = (book) => dispatch => put(
    `http://localhost:3010/books/${book.id}`,
    book,
    dispatch
);
