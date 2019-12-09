import React, { Component } from "react";
import axios from "axios";

import List from "./BookList";
import { Accordion, Button, Card } from "react-bootstrap";

import { Link } from "react-router-dom";

export default class Books extends Component {
  state = {
    books: [],
    subject: this.props.match.params.subjectId || ""
  };

  getData = () => {
    axios
      .get(`/books?subjects_like=${this.props.match.params.subjectId}`)
      .then(response => {
        this.setState({
          books: response.data,
          subject: this.props.match.params.subjectId
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    if (this.props.match.params.subjectId !== this.state.subject) {
      this.getData();
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <p className="font-weight-bold h1 text-center mb-5">BOOKS</p>
        </div>
        <div className="col-12">
          <Accordion>
            <Card>
              {this.state.books.map((book, index) => {
                return (
                  <Accordion defaultActiveKey="0" key={book.id}>
                    <Card.Header>
                      <Accordion.Toggle
                        className="text-left"
                        as={Button}
                        variant="link"
                        eventKey={index}
                      >
                        {book.title}
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={index}>
                      <>
                        <Card.Body>
                          <List data={book} />
                        </Card.Body>
                        <Card.Body>
                          <Link
                            to={{
                              pathname: `/books/${book.id}`,
                              state: {
                                backUrl: `${this.props.match.params.subjectId}`
                              }
                            }}
                          >
                            See details
                          </Link>
                        </Card.Body>
                      </>
                    </Accordion.Collapse>
                  </Accordion>
                );
              })}
            </Card>
          </Accordion>
        </div>
      </div>
    );
  }
}
