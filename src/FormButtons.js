import React from 'react'
import styled from 'styled-components/macro'

export default function FormButtons({ handleCancel }) {
  return (
    <ButtonsContainer>
      <Button type="button" onClick={handleCancel} value="Cancel" />
      <Button type="submit" value="Edit" />
    </ButtonsContainer>
  )
}

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Button = styled.input`
  padding: 12px;
  background: var(--uptainGreen);
  border: none;
  color: white;
  border-radius: 8px;
`
