import React, { Component } from "react";

class BookInfo extends Component {
  //updateServ = event => {
  // this.setState({ title: event.target.value });
  //  this.props.updateServ(event.target.value);
  //};
  // here this is just simple template rendering to show the details of the books
  render() {
    let book = this.props.book; //from app.jsx file
    // we get the the details through props here where we copy the data to book variable
    return (
      <div className="border border-secondary p-5 mb-3">
        <div className="text-warning">
          <h3>
            {book.title} ({book.languages[0]})
          </h3>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <b className="text-secondary">Shelves:</b>
            <ul>
              {book.bookshelves.map(shelve => (
                <li key={shelve}>{shelve}</li>
              ))}
            </ul>
          </div>
          <div className="col-sm-4">
            <b className="text-secondary">Categories:</b>
            <ul>
              {book.subjects.map(subject => (
                <li key={subject}>{subject}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-8">
            <b className="text-secondary">
              {book.authors.length > 1 ? "Authors" : "Author"}
            </b>
            <ul>
              {book.authors.map(author => (
                <li key={author.name}>
                  {author.name} , [{author.birth_year} -{" "}
                  {author.death_year ? author.death_year : ""}]
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm-4" />
        </div>

        <div className="row">
          <div className="col-sm-12">
            <b className="text-secondary">
              Downloaded <b className="text-success">{book.download_count}</b>{" "}
              times.
            </b>
            <ul>
              {Object.entries(book.formats).map(([format, url]) => {
                return (
                  <li key={url}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {url}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default BookInfo;
