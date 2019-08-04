import { connect } from "react-redux";
import List from "../components/List";
import { getBook } from "../actions/Books";

const mapStateToProps = ({ books, selectedSubject }) => ({
    books,
    selectedSubject
});

export default connect(
    mapStateToProps,
    { getBook }
)(List);