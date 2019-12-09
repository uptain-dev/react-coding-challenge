import React, { Component } from "react";
import { Card } from "react-bootstrap";

import List from "./BookList";
import { Link } from "react-router-dom";
import axios from "axios";

export default class BookDetails extends Component {
  state = {
    book: null,
    minDownloadCout: 0
  };

  componentDidMount() {
    axios.get(`/books/${this.props.match.params.bookId}`).then(response => {
      const book = response.data;
      this.setState({
        book: book,
        minDownloadCout: book.download_count
      });
    });
  }

  editBooks = book => {
    this.setState({
      book: book
    });
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
        <div className="mb-3 row">
          <div className="col">
            <Link to={`/subjects/${this.props.location.state.backUrl}`}>
              Go back to search
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-3">
            <Card>
              <Card.Header>{book.title}</Card.Header>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  Click on text to change its value
                </Card.Subtitle>
                <List data={book} editable={true} editBooks={this.editBooks} />
              </Card.Body>
            </Card>
          </div>
        </div>
      </>
    );
  }
}
