import React, { useState, useEffect } from 'react'
import { getBooks, getSubjects, patchBook } from './services'
import SubjectSelection from './SubjectSelection'
import BooksList from './BooksList'
import Form from './Form'

export default function App() {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)

  const [subjects, setSubjects] = useState([])
  const [selectedSubject, setSelectedSubject] = useState('')

  useEffect(() => {
    getBooks().then(setBooks)
    getSubjects().then(setSubjects)
  }, [])

  const filteredBooks =
    selectedSubject === 'all'
      ? books
      : books.filter(({ subjects }) => subjects.includes(selectedSubject))

  return (
    <>
      <SubjectSelection
        setSelectedSubject={setSelectedSubject}
        subjects={subjects}
      />
      <Form
        selectedBook={selectedBook}
        handleChange={handleChange}
        handleInputArrayChange={handleInputArrayChange}
        handleCancel={() => setSelectedBook(null)}
        handleEdit={handleEdit}
        handleInputAuthorChange={handleInputAuthorChange}
        handleInputFormatsChange={handleInputFormatsChange}
      />
      <BooksList books={filteredBooks} setSelectedBook={setSelectedBook} />
    </>
  )
  function handleChange({ target }) {
    const { name, value } = target
    setSelectedBook({ ...selectedBook, [name]: value })
  }

  function handleInputArrayChange({ target }) {
    const { name, value } = target
    const updatedArray = [...selectedBook[name]]
    updatedArray[target.dataset.index] = value
    setSelectedBook({ ...selectedBook, [name]: updatedArray })
  }

  function handleInputAuthorChange({ target }) {
    const updatedAuthors = [...selectedBook.authors]
    const { name, value } = target
    updatedAuthors[target.dataset.index][name] = value
    setSelectedBook({ ...selectedBook, authors: updatedAuthors })
  }

  function handleInputFormatsChange({ target }) {
    const { name, value } = target
    setSelectedBook({
      ...selectedBook,
      formats: { ...selectedBook.formats, [name]: value },
    })
  }

  function handleEdit(event) {
    event.preventDefault()
    patchBook(selectedBook).then(updatedBook => {
      const index = books.findIndex(book => book.id === updatedBook.id)
      setBooks([
        ...books.slice(0, index),
        updatedBook,
        ...books.slice(index + 1),
      ])
      setSelectedBook(null)
    })
  }
}
