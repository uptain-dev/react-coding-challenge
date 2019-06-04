import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';

export const Subjects = ({ subjects: { list }, setSelectedSubject }) => {
  const handleOnChange = event => setSelectedSubject(event.target.value);
  return (
    <FormGroup>
      <Label for="my-subject-select">Select a Subject</Label>
      <Input type="select" name="select" id="my-subject-select" onChange={handleOnChange}>
        {list.map(option => (
          <option key={option}>{option}</option>
        ))}
      </Input>
    </FormGroup>
  );
};

Subjects.propTypes = {
  subjects: PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.string)
  }),
  setSelectedSubject: PropTypes.func
};
