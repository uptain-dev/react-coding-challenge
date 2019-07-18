import React from 'react';
import { connect } from 'react-redux';
import { setBookDetails, startSaveDataToDB } from '../actions/subjects';

class BookInfo extends React.Component {
    state = {
        buttonDisable: true
    }
    onDataChange = (e, caseType) => {
        //using switch case handle corresponding data change in book details store.
        let book = {};
        switch (caseType) {
            case "birth_year":
                book = { ...this.props.bookDetails, authors: [{ ...this.props.bookDetails.authors[0], birth_year: e.target.value }] };
                break;
            case "death_year":
                book = { ...this.props.bookDetails, authors: [{ ...this.props.bookDetails.authors[0], death_year: e.target.value }] };
                break;
            case "name":
                book = { ...this.props.bookDetails, authors: [{ ...this.props.bookDetails.authors[0], name: e.target.value }] };
                break;
            case "bookshelves":
                book = { ...this.props.bookDetails, bookshelves: [e.target.value] };
                break;
            case "download_count":
                book = { ...this.props.bookDetails, download_count: e.target.value };
                break;
            case "languages":
                book = { ...this.props.bookDetails, languages: [e.target.value] };
                break;
            case "media_type":
                book = { ...this.props.bookDetails, media_type: e.target.value };
                break;
            case "title":
                book = { ...this.props.bookDetails, title: e.target.value };
                break;
            default:
                break;
        }
        this.props.setBookDetails(book); //pass the book object to update the redux store values
        this.setState({ buttonDisable: false }); //enable button if any data is changed
    }

    onClickHandle = () => {
        this.props.startSaveDataToDB(this.props.bookDetails); //save edited data to db if clicked on save
        alert("Book details are updated successfully");
    }

    render() {
        console.log(this.props.bookDetails);
        return (
            <div className="content-container smallMarginBottom">
                <div className={this.props.bookDetails.id === "" ? "disabledForm" : undefined}>
                    <input type="text" placeholder="ID" className="text-input" value={this.props.bookDetails.id} readOnly />
                    <input type="text" placeholder="Book Title" className="text-input" value={this.props.bookDetails.title} onChange={(e) => { this.onDataChange(e, "title") }} />
                    <input type="text" placeholder="Author Birth Year" className="text-input" value={this.props.bookDetails.authors[0].birth_year} onChange={(e) => { this.onDataChange(e, "birth_year") }} />
                    <input type="text" placeholder="Author Death Year" className="text-input" value={this.props.bookDetails.authors[0].death_year} onChange={(e) => { this.onDataChange(e, "death_year") }} />
                    <input type="text" placeholder="Author Name" className="text-input" value={this.props.bookDetails.authors[0].name} onChange={(e) => { this.onDataChange(e, "name") }} />
                    <input type="text" placeholder="Bookshelves" className="text-input" value={[...this.props.bookDetails.bookshelves]} onChange={(e) => { this.onDataChange(e, "bookshelves") }} />
                    <input type="text" placeholder="Download Count" className="text-input" value={this.props.bookDetails.download_count} onChange={(e) => { this.onDataChange(e, "download_count") }} />
                    <input type="text" placeholder="Languages" className="text-input" value={this.props.bookDetails.languages} onChange={(e) => { this.onDataChange(e, "languages") }} />
                    <input type="text" placeholder="Media Type" className="text-input" value={this.props.bookDetails.media_type} onChange={(e) => { this.onDataChange(e, "media_type") }} />
                    <button disabled={this.state.buttonDisable} className="button" onClick={this.onClickHandle}>Save</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    bookDetails: state.bookDetails,
    books: state.books
});

const mapDispatchToProps = (dispatch, props) => ({
    setBookDetails: (book) => dispatch(setBookDetails(book)),
    startSaveDataToDB: (book) => dispatch(startSaveDataToDB(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookInfo);