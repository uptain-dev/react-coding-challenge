import React, { Component } from "react";
import PropTypes from "prop-types"; //To run typechecking on the props for a component, we can assign the special propTypes property:

class BookVal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // here we get the specified books
      Val: props.book // we refer to the book prop we can refer
    };
  }
  // this is the method we are talking about below
  setSelectedItem(Val) {
    this.props.setSelectedItem(Val);
  }
  // here we have specs of each book and as soon as a book is clicked, on onclick method turns on the setcategory method and
  //then the above method comes into play where it again refers to the props in the listofbooks.js file to send the value of the selected book
  // in the render, we just show the name of the book and the authors
  render() {
    //rendering
    return (
      <div
        className="row py-3 bg-secondary"
        key={this.state.Val.id}
        onClick={(event, data) => this.setSelectedItem(this.state.Val)}
      >
        <div className="col-sm-8 text-truncate">
          <button type="button" className="btn btn-secondary">
            {this.state.Val.title}
          </button>
        </div>
        <div className="col-sm-4">
          {this.state.Val.authors.map(author => author.name)}
        </div>
      </div>
    );
  }
}
//HERE WE HAVE OUR PROPTYPES
//To run typechecking on the props for a component, we can assign the special propTypes property:
BookVal.propTypes = {
  setSelectedBook: PropTypes.func
};

export default BookVal;
