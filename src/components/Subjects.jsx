import React, { Component } from "react";

class Subjects extends Component {
  constructor(props) {
    super(props);
    this.changeSubject = this.changeSubject.bind(this);
  }

  changeSubject(event) {
    const { setSelectedSubject, showEditForm } = this.props;
    setSelectedSubject(event.target.value);
    showEditForm(false);
  }

  render() {
    const { subjects } = this.props.books;
    return (
      <div className="box">
        <label>Choose a subject</label>
        <select name="subject" onChange={this.changeSubject}>
          <option value="">--</option>
          {subjects &&
            subjects.map((subject, index) => (
              <option value={subject} key={index}>
                {subject}
              </option>
            ))}
        </select>
      </div>
    );
  }
}

export default Subjects;
