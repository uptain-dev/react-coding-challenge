import React, { Component } from "react";
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Subjects from "./components/Subjects";
import Books from "./components/Books";
import BookDetails from "./components/BookDetails";

import "./assets/stylesheet/app.scss";

export default class App extends Component {
  render() {
    return (
      <>
        <Route path="/" render={props => <Navbar {...props} />} />
        <div className="container py-5">
          <Route exact path="/" component={Home} />
          <Route path="/subjects/:subjectId?" component={Subjects} />
          <Route path="/subjects/:subjectId" component={Books} />
          <Route path="/books/:bookId" component={BookDetails} />
        </div>
      </>
    );
  }
}
