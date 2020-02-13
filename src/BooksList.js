import React from 'react'
import styled from 'styled-components/macro'
import Book from './Book.js'

export default function BooksList({ books = [] }) {
  return (
    <BooksListContainer>
      {books.map(book => {
        const { id } = book
        return <Book key={id} book={book} id={id} />
      })}
    </BooksListContainer>
  )
}

const BooksListContainer = styled.div`
  display: grid;
  gap: 20px;
`
