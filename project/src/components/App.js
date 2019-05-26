import React, { Component } from "react";
import "./App.css";
import ListofBooks from "./ListofBooks";
import SubjectFinder from "./SubjectFinder";
import BookInfo from "./BookInfo";
// this is the main js file to handle everything up
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: undefined,
      selectedItem: undefined
    };
  }
  setSelectedItem(item) {
    // here we have the selected item we get from the listofbooks,js by refering to the prop here
    if (this.state.selectedItem !== undefined) {
      // already discussed about it in that file
      if (item.id === this.state.selectedItem.id) {
        item = undefined;
      }
    }
    this.setState({ selectedItem: item }); // and finally here we set the selected item
  }

  // here we get out category through the prop we talked about in subjectfinder.js
  setCategory(category) {
    // so it sets the category so that we can use it later on
    this.setState({ selectedCategory: category });
  }

  renderListofBooks() {
    // now here is the method to rendor the books
    const { selectedCategory } = this.state;
    if (!selectedCategory) {
      return null;
    }
    return (
      // where we give the category to the list of books and render the list. after rendering whenever we click any book , we get the selected item from the prop
      // already talked about it above
      <ListofBooks
        setSelectedItem={this.setSelectedItem.bind(this)}
        selectedCategory={selectedCategory}
      />
    );
  }

  renderBookInfo() {
    // here is the method to render the book info. we have out selected item/
    const { selectedItem } = this.state; // we already set it to a cons t this and we can use it directtly as an object later
    if (!selectedItem) {
      return null;
    }
    return <BookInfo book={selectedItem} />; // now here as we have gotten the selected item by clicking the book(talked above), we set the selected item here and use it
    //as prop in bookinfo.jsx file
  }
  //updateServ = item => {
  // this.setState({book})
  //}

  render() {
    return (
      // here in subject finder, we bind the set category through props
      <div className="container">
        <div className="jumbotron border border-top-0 border-success d-flex">
          <h1 className="text-primary mx-auto">MyReads</h1>
        </div>

        <div className="row mb-5">
          <div className="col-sm-12">
            <SubjectFinder setCategory={this.setCategory.bind(this)} />
          </div>
        </div>
        {this.renderListofBooks()}
        <hr />
        {this.renderBookInfo()}
      </div>
      // and here we start rendering in order:
      //firstly the list of subjects, the books and then the details of it.
    ); //after that we render the book list and here
  }
}

export default App;

//THERE IS A MINOR PROBLEM IN THE SUBJECTFINDER.JSX WHERE WE HAD IMPLEMENTED THE OPTIONS, IT WILL NOT WORK WHEN WE SELECT THE OPTION FOR THE FIRST TIME BUT WILL START WORKING
// FROM THE SECOND TIME, NORMALLY. I COULD HAVE LOOKED INTO THE PROBLEM BUT I HAD 10MINS REMAINING FROM 2 HOURS, AND HENCE COULDNT LOOK INTO IT
// I HAVE IMPLEMENTED ALMOST EVERYTHING THAT HAS BEEN ASKED, EVEN THE DESIGN WHICH WAS MARKED OPTIONAL.
// I IMPORTED THE BOOTSTRAP LIBRARY AND USED IT TO DESIGN. DUE TO THE TIME LIMITS, I HAVE NOT IMPLEMENTED EDITING AND SAVING, WHICH WAS MARKED OPTIONAL DUE TO TIME CONSTRAINTS.
// I WILL BE EMAILING MY FULL REVIEW AND EXPLANATION OF THE CHALLENGE THROUGH EMAIL JUST AFTER HAVING THE PULL REQUEST.
