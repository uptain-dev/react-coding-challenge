import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';

export const Books = ({ books: { list }, setSelectedBook }) => {
  const handleOnChange = event => {
    const selectedBook = list.find(book => book.title === event.target.value);
    if (selectedBook && selectedBook.id) {
      setSelectedBook(selectedBook);
    }
  };
  return (
    <FormGroup>
      <Label for="my-book-select">Select a book</Label>
      <Input type="select" name="select" id="my-book-select" onChange={handleOnChange} disabled={list.length <= 1}>
        {list.map((option, index) => (
          <option key={index}>{option.title}</option>
        ))}
      </Input>
    </FormGroup>
  );
};

Books.propTypes = {
  books: PropTypes.shape({
    list: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string
      })
    )
  }),
  setSelectedBook: PropTypes.func
};
