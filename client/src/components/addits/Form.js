import React from "react";
import { Form as FormWrapper } from "react-bootstrap";

const Form = props => {
  const { data, minNumber, header } = props;

  const handleSubmit = () => {
    props.submitForm();
  };

  const handleChange = event => {
    props.editForm(event);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <p className="h3">{header}</p>
      <FormWrapper.Group>
        <FormWrapper.Label htmlFor="title">Title:</FormWrapper.Label>
        <FormWrapper.Control
          type="text"
          name="title"
          id="title"
          value={data.title}
          onChange={handleChange}
        />
      </FormWrapper.Group>
      <FormWrapper.Group>
        <FormWrapper.Label htmlFor="download_count">
          Download count:
        </FormWrapper.Label>
        <FormWrapper.Control
          type="number"
          min={minNumber ? minNumber : 0}
          name="download_count"
          id="download_count"
          value={data.download_count}
          onChange={handleChange}
        />
      </FormWrapper.Group>
      <FormWrapper.Group>
        <FormWrapper.Label htmlFor="media_type">Media type:</FormWrapper.Label>
        <FormWrapper.Control
          type="text"
          name="media_type"
          id="media_type"
          value={data.media_type}
          onChange={handleChange}
        />
      </FormWrapper.Group>
    </FormWrapper>
  );
};

export default Form;
