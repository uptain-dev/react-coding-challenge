import React from 'react';
import { connect } from 'react-redux';
import { startSetBooks, setBooks, setBookDetails } from '../actions/subjects';

class Subjects extends React.Component {
    onSubjectsChange = (e) => {
        if (e.target.value === "") //Reset books store if select subject option is selected
            this.props.setBooks({});
        else
            this.props.startSetBooks(e.target.value);//pass the subject to action to fetch corresponding books
        this.props.setBookDetails({}); //reset the books details container as book is still not selected
    }
    render() {
        return (
            <div className="content-container">
                <select onChange={this.onSubjectsChange} className="select">
                    <option value="">Select Subject</option>
                    {this.props.subjects.map((item, index) => {
                        return (
                            <option key={index} value={item}>{item}</option>
                        );
                    })}
                </select>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    subjects: state.subjects
});

const mapDispatchToProps = (dispatch, props) => ({
    startSetBooks: (subject) => dispatch(startSetBooks(subject)),
    setBooks: (book) => dispatch(setBooks(book)),
    setBookDetails: (book) => dispatch(setBookDetails(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(Subjects);