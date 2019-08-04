import { connect } from "react-redux";
import BookForm from "../components/BookForm";
import { saveEditedBook, showEditForm, getBooks } from "../actions/Books";

const mapStateToProps = ({ books }) => ({
    books
});

export default connect(
    mapStateToProps,
    { saveEditedBook, showEditForm, getBooks }
)(BookForm);