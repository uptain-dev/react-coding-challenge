import React from 'react'
import styled from 'styled-components/macro'

export default function FormInputAuthors({
  authors = [],
  handleInputAuthorChange,
}) {
  return (
    <>
      {authors.map(
        ({ name, birth_year: birthYear, death_year: deathYear }, index) => (
          <AuthorContainer key={index}>
            <Label>
              Author
              <Input
                data-index={index}
                type="text"
                name="name"
                id={'name' + index}
                value={name}
                onChange={handleInputAuthorChange}
              />
            </Label>
            <Label>
              Year of Birth
              <Input
                data-index={index}
                type="text"
                name="birthYear"
                id={'birthYear' + index}
                value={birthYear}
                onChange={handleInputAuthorChange}
              />
            </Label>
            <Label>
              Year of Death
              <Input
                data-index={index}
                type="text"
                name="deathYear"
                id={'deathYear' + index}
                value={deathYear}
                onChange={handleInputAuthorChange}
              />
            </Label>
          </AuthorContainer>
        )
      )}
    </>
  )
}

const AuthorContainer = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr auto auto;
`

const Label = styled.label`
  display: grid;
  gap: 4px;
`
const Input = styled.input`
  :focus {
    outline: solid 2px var(--uptainGreen);
  }
`
