import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.editBook = this.editBook.bind(this);
  }
  editBook(event, id) {
    event.preventDefault();
    this.props.getBook(id);
  }
  render() {
    const { selectedSubject, books } = this.props.books;
    const booksBySubject =
      books && books.filter(book => book.subjects.includes(selectedSubject));

    return (
      <div className="box">
        <h2>My Reading materials</h2>
        <table width="100%">
          <thead>
            <tr>
              <th width="30%">Title</th>
              <th width="25%">Authors</th>
              <th width="15%">Bookshelves</th>
              <th width="10%">Download Count</th>
              <th width="10%">Languages</th>
              <th width="10%">Subjects</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {booksBySubject.map((book, index) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>
                  <ol>
                    {book.authors.map((author, index) => (
                      <li key={index}>{author.name}</li>
                    ))}
                  </ol>
                </td>
                <td>
                  <ol>
                    {book.bookshelves.map((shelf, index) => (
                      <li key={index}>{shelf}</li>
                    ))}
                  </ol>
                </td>
                <td>{book.download_count}</td>
                <td>
                  <ul>
                    {book.languages.map((lang, index) => (
                      <li key={index}>{lang}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <ul>
                    {book.subjects.map((subject, index) => (
                      <li key={index}>{subject}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <a
                    href="/edit"
                    onClick={event => this.editBook(event, book.id)}
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
