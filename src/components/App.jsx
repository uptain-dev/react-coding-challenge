import React, { Fragment, Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import List from "../containers/List";
import Subjects from "../containers/Subjects";
import BookForm from "../containers/BookForm";

class App extends Component {
  componentDidMount() {
    const { getSubjects, getBooks } = this.props;
    getSubjects();
    getBooks();
  }

  render() {
    const { selectedSubject, showEditForm } = this.props.books;

    return (
      <Fragment>
        <Header />
        <Subjects />
        {selectedSubject && <List />}
        {showEditForm && <BookForm />}
        <Footer />
      </Fragment>
    );
  }
}

export default App;
