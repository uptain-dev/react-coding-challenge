import React from 'react';
import { Container } from '@material-ui/core';
import BookPage from './containers/BookPage/BookPage';

function App() {
  return (
    <div className="App">
      <Container fixed>
        <BookPage />
      </Container>
    </div>
  );
}

export default App;
