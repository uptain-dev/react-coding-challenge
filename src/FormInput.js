import React from 'react'
import styled from 'styled-components/macro'

export default function FormInput({ title, name, value = '', handleChange }) {
  return (
    <Label htmlFor={name}>
      {title}
      <Input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      />
    </Label>
  )
}

const Label = styled.label`
  display: grid;
  gap: 4px;
`
const Input = styled.input`
  :focus {
    outline: solid 2px var(--uptainGreen);
  }
`
