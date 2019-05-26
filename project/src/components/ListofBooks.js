import React, { Component } from "react";
import BookVal from "./BookVal";
import PropTypes from "prop-types"; //To run typechecking on the props for a component, we can assign the special propTypes property:

class ListofBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      selectedCategory: undefined,
      selectedItem: undefined
    };
  }
  // fetching the data here again
  componentDidMount() {
    this.fetchData();
  }
  // we have a separte method for it. to get the data out of the json file
  //this is how fetch method works
  fetchData() {
    let bookList = [];
    fetch("http://localhost:3010/books") //fetch from the link
      .then(response => response.json()) // and whatever response we get from here
      .then(data => {
        // take the data
        for (const book of data) {
          //fetching the books
          bookList.push(book);
        }
        this.setState({ books: bookList }); // and adding it to the state books.
      });
  }
  // below is the explanantion of this
  setSelectedItem(item) {
    this.props.setSelectedItem(item);
  }
  // here again we get the value of the selected book from bookval.js file and e give at as prop in the above defined function to be used in
  //app.js file. we do it..
  render() {
    let filteredItems = [];
    const selectedCategory = this.props.selectedCategory; // here we get the selected category from the props in app.js
    for (const book of this.state.books) {
      if (book.subjects.includes(selectedCategory)) {
        // we filter the items according to selected category
        filteredItems.push(
          // and then push the filtered ones to the filtereditems
          <BookVal
            key={book.id}
            book={book}
            setSelectedItem={this.setSelectedItem.bind(this)}
          />
        );
      }
    }

    return (
      // rendering, we show the filtereditems here.
      <div>
        <div className="row bg-dark">
          <div className="col-sm-8">
            <h3 className="text-muted">Title</h3>
          </div>
          <div className="col-sm-4">
            <h3 className="text-muted">Author</h3>
          </div>
        </div>
        {filteredItems}
      </div>
    );
  }
}
//HERE WE HAVE OUR PROPTYPES
//To run typechecking on the props for a component, we can assign the special propTypes property:
ListofBooks.propTypes = {
  setSelectedBook: PropTypes.func
};

export default ListofBooks;
