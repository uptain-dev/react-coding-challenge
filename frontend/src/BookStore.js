import React from 'react';

import apiClient from './apiClient';

import SubjectSelection from './components/subjectSelection';
import BookList from './components/bookList';
import BookDetails from './components/bookDetails';

import './BookStore.css';

const API_BASE_URL = "http://localhost:3010/";

var api = null;

/**
 * Book store react component
 * 
 * @version 0.1.0
 * @author Angela Galliat
 * @extends React.Component
 */
export default class BookStore extends React.Component {
    /**
     * @type {object}
     * @property subjectIndex index of the selected subject
     * @property subjectData array of available subjects
     * @property bookListIndex index of the selected book
     * @property bookListData array of available books matching the subject
     * @property bookData object with the details of the selected book
     */
    state = {
        subjectIndex: -1,
        subjectData: [],
        bookListIndex: -1,
        bookListData: [],
        bookData: {}
    };

    /**
     * class constructor
     * @param {object} props 
     */
    constructor(props) {
        super(props);

        api = new apiClient({ baseURL: API_BASE_URL });
    }

    /**
     * use setState in async functions with await
     * @param {object} state
     * @return {Promise}
     */
    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve);
        });
    }
    
    /**
     * send an async request to get all available subjects
     */
    async fetchSubject() {
        const response = await api.request('/subjects');

        if(response && response.status === 200) {
            await this.setStateAsync({subjectData: response.data});
        }
    }

    /**
     * send an async request to get all books matching the provided subject
     * @param {string} selectedSubject 
     */
    async fetchBookList(selectedSubject) {
        if(selectedSubject && selectedSubject !== '') {
            const response = await api.request('/books?subjects_like=' + encodeURIComponent(selectedSubject));

            if(response && response.status === 200) {
                await this.setStateAsync({bookListData: response.data});
            }
        }
        else {
            await this.setStateAsync({bookListData: []});
        }
    }

    /**
     * send an async request to update the book with the provided id and data
     * @param {int} bookId 
     * @param {object} bookdata 
     */
    async updateBook(bookId, bookdata) {
        if(bookId && bookId !== -1) {
            const response = await api.update('/books/' + bookId, bookdata);

            if(response && response.status === 200) {
                await this.handleSubjectChanged(this.state.subjectIndex);
                this.handleBookListChanged(this.state.bookListIndex);
            }
        }
    }

    /**
     * the subject selection has changed
     * @param {int} index 
     */
    async handleSubjectChanged(index) {
        await this.setStateAsync({ bookListData: [], bookData: {} });
        await this.setStateAsync({ subjectIndex: index });
        
        if(index >= 0) {
            await this.fetchBookList(this.state.subjectData[index]);
        }
        else {
            await this.fetchBookList('');
        }
    }

    /**
     * the book selection in the book list has changed
     * @param {int} index 
     */
    handleBookListChanged(index) {
        this.setState({ bookListIndex: index });

        if(index >= 0) {
            this.setState({ bookData: this.state.bookListData[index] });
        }
        else {
            this.setState({ bookData: {} });
        }
    }

    /**
     * changes to the book details should be saved
     * @param {object} data 
     */
    handleBookUpdate(data) {
      this.updateBook(data.id, data);
    }

    /**
     * Called from the framework, when the component is sucessfully inserted into the HTML DOM tree.
     */
    componentDidMount() {
        this.fetchSubject();
    }

    /**
     * Render the component
     * @return {ReactElement} markup
     */
    render() {
        return (
            <div id="bookstore">
                <h1>Book Store</h1>
                <div id="subject">
                    <SubjectSelection
                        label="Subject: "
                        data={ this.state.subjectData }
                        handleChange={ (index) => { this.handleSubjectChanged(index); } }
                    />
                </div>
                {
                    this.state.bookListData.length > 0 ? (
                        <div id="booklist">
                            <BookList
                                label="List of books: "
                                data={ this.state.bookListData }
                                handleChange={ (index) => { this.handleBookListChanged(index); } }
                            />
                        </div>
                    ) : ''
                }
                {
                    Object.keys(this.state.bookData).length > 0 ? (
                        <div id="bookdetails">
                            <BookDetails
                                label="Book details: "
                                data={this.state.bookData}
                                handleUpdate={ (data) => { this.handleBookUpdate(data); } }
                            />
                        </div>
                    ) : ''
                }
            </div>
        )
    }
}
