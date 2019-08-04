import { connect } from "react-redux";
import Subjects from "../components/Subjects";
import { setSelectedSubject, showEditForm } from "../actions/Books";

const mapStateToProps = ({ books }) => ({
    books
});

export default connect(
    mapStateToProps,
    { setSelectedSubject, showEditForm }
)(Subjects);