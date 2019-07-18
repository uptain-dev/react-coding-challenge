import React from 'react';
import './App.css';
import Subjects from './components/Subjects';
import Books from './components/Books';
import BookInfo from './components/BookInfo';

export default class App extends React.Component{
  render(){
    return(
      <div className="App">
        <h2 className="title">Book Information Editor</h2>
        <Subjects />
        <Books />
        <BookInfo />
      </div>
    );
  }
}
