import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Books } from '../components/Books';
import { EditableBookForm } from '../components/EditableBookForm';
import { Subjects } from '../components/Subjects';
import { ACTIONS } from '../reducers/actions';

const Layout = styled.div`
  font-size: 1.5rem;
  font-family: 'Lato';
  text-align: center;
  padding: 1rem 5rem;
  background: #dadada;
  margin: 0px;
  display: flex;
  flex-direction: column;

  select:disabled {
    cursor: not-allowed;
  }
`;

export class App extends Component {
  componentDidMount() {
    this.props.fetchSubjects();
  }

  render() {
    const { subjects, setSelectedSubject, books, setSelectedBook, saveBook } = this.props;
    return (
      <Layout>
        <h1>📚</h1>
        <h1>Books Inventory </h1>
        <Subjects subjects={subjects} setSelectedSubject={setSelectedSubject} />
        <Books books={books} setSelectedBook={setSelectedBook} />
        <EditableBookForm data={books.selected} saveBook={saveBook} />
      </Layout>
    );
  }
}

const mapStateToProps = ({ subjects, books }) => ({
  subjects,
  books
});

const mapDispatchToProps = dispatch => ({
  fetchSubjects: () => dispatch(ACTIONS.fetchSubjects()),
  setSelectedSubject: subject => dispatch(ACTIONS.setSelectedSubject(subject)),
  setSelectedBook: book => dispatch(ACTIONS.setSelectedBook(book)),
  saveBook: book => dispatch(ACTIONS.saveBook(book))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
