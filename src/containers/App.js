import { connect } from "react-redux";
import App from "../components/App";
import { getSubjects, getBooks } from "../actions/Books";

const mapStateToProps = ({ books, selectedSubject, editForm }) => ({
  books,
  selectedSubject,
  editForm
});

export default connect(
  mapStateToProps,
  { getSubjects, getBooks }
)(App);