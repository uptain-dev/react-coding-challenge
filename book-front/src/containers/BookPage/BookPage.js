import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';
import { baseUrl } from '../../config';
import Picker from '../../components/Picker/Picker';
import SimpleList from '../../components/SimpleList/SimpleList';
import BookForm from '../../components/BookForm/BookForm';

const BookPage = () => {
  const [selectedSubject, setSubject] = useState('');
  const [selectedBookId, setSelectedBookId] = useState('');

  const [subjects, setSubjects] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      const { data } = await axios(`${baseUrl}/subjects`);

      setSubjects(data);
    };

    const fetchBooks = async () => {
      const { data } = await axios(`${baseUrl}/books?subjects_like=${encodeURIComponent(selectedSubject)}`);

      setBooks(data);
    };

    if (subjects.length === 0) {
      fetchSubjects();
    }
    if (selectedSubject.length > 0) {
      fetchBooks(selectedSubject);
    }
  }, [subjects, selectedSubject]);

  const onSubjectSelected = (event) => {
    const { target: { value } } = event;
    setSubject(value);
  };

  const onBookSelected = value => () => {
    setSelectedBookId(value);
  };

  const updateBook = (name, value) => {
    const updatedBooks = [...books];
    const updatedBook = updatedBooks.find(book => book.id === selectedBookId);
    updatedBook[name] = value;
    setBooks(updatedBooks);
  };

  const displayedBook = books.find(book => book.id === selectedBookId);

  const saveBook = async () => {
    await axios.put(
      `${baseUrl}/books/${displayedBook.id}`,
      displayedBook,
    );
  };


  return (
    <>
      <Typography variant="h3">Book editor</Typography>
      <Picker name="Subject" value={selectedSubject} items={subjects} handleChange={onSubjectSelected} />
      <SimpleList
        items={books.map(({ title, id }) => ({ title, value: id }))}
        onItemClick={onBookSelected}
      />
      { displayedBook
        && (
          <BookForm
            book={displayedBook}
            updateBook={updateBook}
            subjectList={subjects}
            handleSave={saveBook}
          />
        )
      }
    </>
  );
};

export default BookPage;
