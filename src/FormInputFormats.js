import React from 'react'
import styled from 'styled-components/macro'

export default function FormInputFormats({
  title,
  formats = {},
  handleInputFormatsChange,
}) {
  const formatsKeys = Object.keys(formats)

  return (
    <FormatsContainer>
      {title}
      {formatsKeys.map((key, index) => (
        <InputContainer key={index}>
          <P>{key}</P>
          <Input
            type="text"
            name={key}
            value={formats[key]}
            onChange={handleInputFormatsChange}
          />
        </InputContainer>
      ))}
    </FormatsContainer>
  )
}
const FormatsContainer = styled.div`
  display: grid;
  gap: 4px;
`
const InputContainer = styled.div`
  display: grid;
  gap: 4px;
  grid-template-columns: 160px 1fr;
`
const Input = styled.input`
  :focus {
    outline: solid 2px var(--uptainGreen);
  }
`
const P = styled.p`
  font-size: 12px;
  margin: 0;
`
