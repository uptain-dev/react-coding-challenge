const bookDetailsDefault = {
    id: "",
    authors: [{
        birth_year: "",
        death_year: "",
        name: ""
    }],
    bookshelves: [],
    download_count: "",
    formats: {},
    languages: [],
    media_type: "",
    subjects: [],
    title: ""
};

export default (state = bookDetailsDefault, action) => {
    switch (action.type) {
        case 'SET_BOOK_DETAILS':
            if (Object.keys(action.book).length === 0 && action.book.constructor === Object) {
                console.log(state);
                return bookDetailsDefault;
            }
            else
                return action.book;
        default:
            return state;
    }
}