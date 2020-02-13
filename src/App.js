import React, { useState, useEffect } from 'react'
import { getBooks, getSubjects } from './services'
import SubjectSelection from './SubjectSelection'
import Book from './Book'
import BooksList from './BooksList'

export default function App() {
  const [books, setBooks] = useState([])
  const [subjects, setSubjects] = useState([])
  const [selectedSubject, setSelectedSubject] = useState('')

  useEffect(() => {
    getBooks().then(setBooks)
    getSubjects().then(setSubjects)
  }, [])

  const selectedBooks =
    selectedSubject === 'all'
      ? books
      : books.filter(({ subjects }) => subjects.includes(selectedSubject))

  return (
    <>
      <SubjectSelection
        setSelectedSubject={setSelectedSubject}
        subjects={subjects}
      />
      <BooksList books={selectedBooks} />
    </>
  )
}
