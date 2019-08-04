const books = (state = { subject: [], books: [], book: {}, selectedSubject: '', showEditForm: false }, action) => {
    switch (action.type) {
        case "GET_BOOKS":
            return Object.assign({}, state, { "books": action.payload });
        case "GET_SUBJECTS":
            return Object.assign({}, state, { "subjects": action.payload });
        case "GET_BOOK":
            return Object.assign({}, state, { "book": action.payload });
        case "SELECTED_SUBJECT":
            return Object.assign({}, state, { "selectedSubject": action.payload });
        case "SHOW_EDIT_FORM":
            return Object.assign({}, state, { "showEditForm": action.payload });
        default:
            break;
    }
    return state;
};

export default books;
