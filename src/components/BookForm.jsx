import React, { Component } from "react";

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.books.book
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleShelvesChange = this.handleShelvesChange.bind(this);
    this.handleLanguagesChange = this.handleLanguagesChange.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      ...props.books.book
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleAuthorChange(event, index, field) {
    const authors = [...this.state.authors];
    authors[index][field] = event.target.value;
    this.setState({ authors });
  }

  handleSubjectChange(event, index) {
    const subjects = [...this.state.subjects];
    subjects[index] = event.target.value;
    this.setState({ subjects });
  }

  handleShelvesChange(event, index) {
    const bookshelves = [...this.state.bookshelves];
    bookshelves[index] = event.target.value;
    this.setState({ bookshelves });
  }

  handleLanguagesChange(event, index) {
    const languages = [...this.state.languages];
    languages[index] = event.target.value;
    this.setState({ languages });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { saveEditedBook, showEditForm, getBooks } = this.props;

    saveEditedBook(this.state).then(res => {
      showEditForm(false);
      res && getBooks();
    });
  }

  render() {
    const {
      title,
      authors,
      subjects,
      bookshelves,
      download_count,
      media_type,
      languages
    } = this.state;
    return (
      <div className="box">
        <form id="book-form">
          <h2>Edit a book</h2>

          <div className="container">
            <div className="col">
              <label>Title</label>
            </div>
            <div className="col">
              <input
                type="text"
                name="title"
                value={title}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="container">
            <div className="col">
              <label>Authors</label>
            </div>

            {authors.map((author, index) => (
              <div className="col" key={index}>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  value={author.name}
                  onChange={event => {
                    this.handleAuthorChange(event, index, "name");
                  }}
                />
                <input
                  type="text"
                  name="birth-year"
                  placeholder="birth year"
                  value={author.birth_year}
                  onChange={event => {
                    this.handleAuthorChange(event, index, "birth_year");
                  }}
                />
                <input
                  type="text"
                  name="death-year"
                  placeholder="death year"
                  value={author.death_year}
                  onChange={event => {
                    this.handleAuthorChange(event, index, "death_year");
                  }}
                />
                <hr />
              </div>
            ))}
          </div>

          <div className="container">
            <div className="col">
              <label>Subject</label>
            </div>
            <div className="col">
              {subjects.map((subject, index) => (
                <input
                  key={index}
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={event => {
                    this.handleSubjectChange(event, index);
                  }}
                  disabled
                />
              ))}
            </div>
          </div>

          <div className="container">
            <div className="col">
              <label>Bookshelves</label>
            </div>
            <div className="col">
              {bookshelves.map((bookshelf, index) => (
                <input
                  key={index}
                  type="text"
                  name="bookshelves"
                  value={bookshelf}
                  onChange={event => {
                    this.handleShelvesChange(event, index);
                  }}
                />
              ))}
            </div>
          </div>

          <div className="container">
            <div className="col">
              <label>Download Counts</label>
            </div>
            <div className="col">
              <input
                type="text"
                name="download_count"
                value={download_count}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="container">
            <div className="col">
              <label>Media Types</label>
            </div>
            <div className="col">
              <input
                type="text"
                name="media_type"
                value={media_type}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="container">
            <div className="col">
              <label>Languages</label>
            </div>
            <div className="col">
              {languages.map((language, index) => (
                <input
                  key={index}
                  type="text"
                  name="languages"
                  value={language}
                  onChange={event => {
                    this.handleLanguagesChange(event, index);
                  }}
                />
              ))}
            </div>
          </div>
          <div className="container">
            <button type="button" onClick={this.handleSubmit}>
              Save
            </button>
            <button type="button">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default BookForm;
