import React from "react";
import { Form } from "react-bootstrap";

const Select = props => {
  const handleChange = event => {
    let selectedOption = event.target.value;
    props.selectChange(selectedOption);
  };

  return (
    <Form.Group>
      <Form.Label
        htmlFor="subject"
        className="d-block form-label h3 text-center mb-3"
      >
        {props.label}
      </Form.Label>
      <Form.Control
        as="select"
        name="subject"
        id="subject"
        onChange={handleChange}
        value={props.selectedOption}
      >
        {!props.selectedOption && (
          <option value="default" hidden>
            Choose your subject
          </option>
        )}
        {props.options.map(subject => {
          return (
            <option key={subject} value={subject}>
              {subject}
            </option>
          );
        })}
      </Form.Control>
    </Form.Group>
  );
};

export default Select;
