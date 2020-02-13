import React from 'react'
import styled from 'styled-components/macro'
import FormInput from './FormInput'
import FormInputAuthors from './FormInputAuthors'
import FormInputArray from './FormInputArray'
import FormInputFormats from './FormInputFormats'
import FormButtons from './FormButtons'

export default function Form({
  selectedBook,
  handleChange,
  handleCancel,
  handleInputArrayChange,
  handleEdit,
  handleInputAuthorChange,
  handleInputFormatsChange,
}) {
  return selectedBook ? (
    <BookForm onSubmit={handleEdit}>
      <FormInput
        title="Title"
        name="title"
        value={selectedBook.title}
        handleChange={handleChange}
      />
      <FormInputArray
        title="Subjects"
        name="subjects"
        arr={selectedBook.subjects}
        handleInputArrayChange={handleInputArrayChange}
      />
      <FormInputAuthors
        authors={selectedBook.authors}
        handleInputAuthorChange={handleInputAuthorChange}
      />
      <FormInputArray
        title="Bookshelves"
        arr={selectedBook.bookshelves}
        name="bookshelves"
        handleInputArrayChange={handleInputArrayChange}
      />
      <FormInput
        title="Download count"
        name="download_count"
        value={selectedBook['download_count']}
        handleChange={handleChange}
      />
      <FormInputArray
        title="Languages"
        arr={selectedBook.languages}
        name="languages"
        handleInputArrayChange={handleInputArrayChange}
      />
      <FormInput
        title="Media type"
        name="media_type"
        value={selectedBook['media_type']}
        handleChange={handleChange}
      />
      <FormInputFormats
        title="Formats"
        formats={selectedBook.formats}
        handleInputFormatsChange={handleInputFormatsChange}
      />
      <FormButtons handleCancel={handleCancel} handleEdit={handleEdit} />
    </BookForm>
  ) : (
    ''
  )
}

const BookForm = styled.form`
  display: grid;
  gap: 12px;
  width: 100%;
  background: var(--dark);
  color: white;
  padding: 12px;
  border-radius: 8px;
`
