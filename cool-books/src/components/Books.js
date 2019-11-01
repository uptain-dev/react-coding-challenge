import React, { Component } from 'react';
import axios from 'axios';
import './Books.css';

class Books extends Component {

    constructor(props) {
      super(props);
      this.state = {
          books: [],
          format: "",
          titles: "",
          book: ""
      };
      this.handleFormatChange = this.handleFormatChange.bind(this);
      this.handleTitleChange = this.handleTitleChange.bind(this);
    }

    componentDidMount() {
      axios.get('http://localhost:3010/books?subjects_like=' + this.state.format)
        .then(res => this.setState({ books : res.data }));
    }

    handleFormatChange(e) {
      this.setState({format: e.target.value});
      axios.get('http://localhost:3010/books?subjects_like=' + e.target.value)
      .then(res => this.setState({ books : res.data }));
    }

    handleTitleChange(e) {
      this.setState({title: e.target.value});
      axios.get('http://localhost:3010/books?title_like=' + e.target.value)
        .then(res => this.setState({ book : res.data }));
    }
  
    render() {

        return (
        <div>
          <h1 className="page-title">Books</h1>
          <form className="form">
            <div>
              Choose a Book subject:               
            </div>
            <select className="option-menu" value={this.state.value} onChange={this.handleFormatChange}>
              <option value="">All</option>
              <option value="Fiction">Fiction</option>
              <option value="Science">Science</option>
            </select>
          </form>

          <form className="form">
            <div>
              Choose a Book from the list: 
            </div>
            <select className="option-menu" value={this.state.title} onChange={this.handleTitleChange}>
              <option key="a23443">Book List:</option>
              {this.state.books.map(
                (book, index)=><option key={index} value={book.title}>{book.title}</option>
                )}
            </select>
          </form>
        </div>
      )
    }
}

export default Books;
