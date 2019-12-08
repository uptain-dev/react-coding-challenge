import React, { Component } from "react";
import axios from "axios";

import Select from "./addits/Select";

export default class Subjects extends Component {
  state = {
    subjects: [],
    selectedValue: this.props.match.params.subjectId
      ? this.props.match.params.subjectId
      : ""
  };

  getData = () => {
    axios
      .get("/subjects")
      .then(response => {
        this.setState({
          subjects: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getData();
  }

  selectChange = value => {
    this.setState(
      {
        selectedValue: value
      },
      () => {
        this.props.history.push(`/subjects/${this.state.selectedValue}`);
      }
    );
  };

  render() {
    return (
      <div className="row mb-3">
        <div className="col">
          <Select
            selectChange={this.selectChange}
            selectedOption={this.state.selectedValue}
            options={this.state.subjects}
            label="Choose your Subject"
          />
          {!this.state.selectedValue && (
            <p className="text-center">No subject selected.</p>
          )}
        </div>
      </div>
    );
  }
}
