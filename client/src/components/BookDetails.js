import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

import List from "./BookList";
import Form from "./addits/Form";

import { Link } from "react-router-dom";

export default class BookDetails extends Component {
  state = {
    book: null,
    editForm: false,
    minDownloadCout: 0
  };

  componentDidMount() {
    const book = this.props.location.state.bookInfo.book;
    this.setState({
      book: book,
      minDownloadCout: book.download_count
    });
  }

  toggleEdit = () => {
    this.setState({
      editForm: !this.state.editForm
    });
  };

  handleFormChange = event => {
    this.setState({
      book: {
        ...this.state.book,
        [event.target.name]: event.target.value
      }
    });
  };

  submitFormChange = () => {
    console.log("SUBMIT FORM");
  };

  render() {
    if (this.state.error) {
      return <p>{this.state.error}</p>;
    } else if (this.state.book === null) {
      return <div></div>;
    }

    const { book } = this.state;
    return (
      <>
        <div className="align-items-center mb-3 row">
          <div className="col">
            <Link to={`/subjects/${this.props.location.state.backUrl}`}>
              Go back to search
            </Link>
          </div>
          <div className="col-auto">
            <Button variant="outline-secondary" onClick={this.toggleEdit}>{`${
              !this.state.editForm ? "Show" : "Hide"
            } Edit Form`}</Button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 mb-3">
            <Card>
              <Card.Header>{book.title}</Card.Header>
              <Card.Body>
                <List data={book} />
              </Card.Body>
            </Card>
          </div>
          {this.state.editForm && (
            <div className="col-12 col-lg-6 text-center">
              <Form
                submitForm={this.submitFormChange}
                editForm={this.handleFormChange}
                data={book}
                minNumber={this.state.minDownloadCout}
                header="Edit book detail"
              />
            </div>
          )}
        </div>
      </>
    );
  }
}
