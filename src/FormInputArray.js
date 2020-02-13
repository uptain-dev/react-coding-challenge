import React from 'react'
import styled from 'styled-components/macro'

export default function FormInputArray({
  title,
  arr = [],
  handleInputArrayChange,
  name,
}) {
  return (
    <InputContainer>
      {title}
      {arr.map((el, index) => (
        <Input
          key={index}
          name={name}
          data-index={index}
          type="text"
          value={el}
          onChange={handleInputArrayChange}
        />
      ))}
    </InputContainer>
  )
}
const InputContainer = styled.div`
  display: grid;
  gap: 4px;
`

const Input = styled.input`
  :focus {
    outline: solid 2px var(--uptainGreen);
  }
`
