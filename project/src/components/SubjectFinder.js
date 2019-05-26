import React, { Component } from "react";
import PropTypes from "prop-types"; //To run typechecking on the props for a component, we can assign the special propTypes property:
class SubjectFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [{ text: "", value: "" }],
      value: ""
    };
  }
  //here we get the data at the time of unmounting and save it to the options in state.
  componentWillMount() {
    this.fetchData();
  }
  // we have a separte method for it. to get the data out of the json file
  //this is how fetch method works
  fetchData() {
    fetch("http://localhost:3010/subjects") //fetch from the link
      .then(response => response.json()) // and whatever response we get from here
      .then(data => {
        // take the data
        let newOptions = [];
        for (let a = 0; a < data.length; a++) {
          // and go through whole data using the for loop
          newOptions.push({ text: data[a], value: data[a] }); // and set the newoptions variable with each detail
        }
        this.setState({ options: newOptions }); // and then set the options in state as the new option
      });
  }
  // HERE WE HAVE A MINOR PROBLEM WITH THE DROPDOWN WHERE WE HAVE TO SELECT TWICE FOR THE FIRST TIME TO MAKE IT WORK.
  // BUT FROM THE SECOND TIME IT WORKS PROPERLY
  //I TRIED TO FIX IT BUT DUE TO TIME CONSTRAINT I COULD FIX IT PARTIALLY

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.categorySetter();
  };
  categorySetter = () => {
    var va = "";
    if (this.state.value === "Science") {
      va = "Fiction";
    }
    if (this.state.value === "Fiction") {
      va = "Science";
    }
    this.props.setCategory(va);
  };
  // HERE WE HAVE RENDER METHOD
  render() {
    return (
      <div>
        <h4 className="mb-3 text-dark">
          Please select the subject you would like to read:{" "}
        </h4>
        <select // here we have our dropdown, it still has some small bugs to fix
          id="lang"
          onChange={this.handleChange} // we call handlechange method onchange
          value={this.state.value}
          className="custom-select"
        >
          {this.state.options.map((
            option // using map method to map through the options and displaying all the subjects
          ) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option> // we display option.text and the value of the option would be option.value
          ))}
        </select>
      </div>
    );
  }
}
//HERE WE HAVE OUR PROPTYPES
//To run typechecking on the props for a component, we can assign the special propTypes property:
SubjectFinder.propTypes = {
  setCategory: PropTypes.func
};

export default SubjectFinder;
