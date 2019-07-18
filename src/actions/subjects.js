let url = "http://localhost:3010/";
//SAVE_DATA_DB
export const saveDataToDB = (book) => ({
    type: 'SAVE_DATA_DB',
    book
});

//save the data to DB using PUT method and dispatch action to update the store value
export const startSaveDataToDB = (book) => {
    const tempUrl = `${url}books/${book.id}`;
    return (dispatch, getState) => {
        return fetch(tempUrl, {
            method: 'PUT',
            body: JSON.stringify(book),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                let book = data;
                dispatch(saveDataToDB(book));
            })
    }
}

//UPDATE_BOOK_DETAILS
export const updateBookDetails = (book) => ({
    type: 'UPDATE_BOOK_DETAILS',
    book
});

//SET_BOOK_DETAILS
export const setBookDetails = (book) => ({
    type: 'SET_BOOK_DETAILS',
    book
});
export const startSetBookDetails = (id) => {
    const tempUrl = `${url}books/${id}`;
    return (dispatch, getState) => {
        return fetch(tempUrl)
            .then(resp => resp.json())
            .then(data => {
                let book = data;
                console.log(book);
                dispatch(setBookDetails(book));
            })
    }
}

//SET_BOOKS
export const setBooks = (books) => ({
    type: 'SET_BOOKS',
    books
});

export const startSetBooks = (subject) => {
    const tempUrl = `${url}books?subjects_like=${subject}`;
    return (dispatch, getState) => {
        return fetch(tempUrl)
            .then(resp => resp.json())
            .then(data => {
                let books = data.map((book, index) => {
                    return (
                        book
                    );
                });
                console.log(books);
                dispatch(setBooks(books));
            })
    }
}

// SET_SUBJECTS
export const setSubjects = (subjects) => ({
    type: 'SET_SUBJECTS',
    subjects
});


export const startSetSubjects = () => {
    const tempUrl = `${url}subjects`;
    return (dispatch, getState) => {
        return fetch(tempUrl)
            .then(resp => resp.json())
            .then(data => {
                let subjects = data.map((subject, index) => {
                    return (
                        subject
                    );
                })
                dispatch(setSubjects(subjects));
            })
    }
}

