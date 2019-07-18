import React from 'react';
import { connect } from 'react-redux';
import { startSetBookDetails, setBookDetails } from '../actions/subjects';

class Books extends React.Component {
    onBookChange = (e) => {
        //if select books option is selected reset the book details store values else fetch correspondning details of the book selected
        e.target.value === "" ? this.props.setBookDetails({}) : this.props.startSetBookDetails(e.target.value);
    }
    render() {
        return (
            <div className="content-container">
                <select onChange={this.onBookChange} className="select">
                    <option value="">Select Book</option>
                    {this.props.books.length > 0 && this.props.books.map((item, index) => {
                        return (
                            <option key={index} value={item.id}>{item.title}</option>
                        );
                    })}
                </select>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    books: state.books
});

const mapDispatchToProps = (dispatch, props) => ({
    startSetBookDetails: (book) => dispatch(startSetBookDetails(book)),
    setBookDetails: (book) => dispatch(setBookDetails(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);