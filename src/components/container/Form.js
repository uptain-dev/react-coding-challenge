import React, { useState, useReducer } from "react";
import styled from "@emotion/styled";
import { reducer, dispatchMiddleware } from "../../store/reducer";

function Form({ bookprops }) {
  const [title, setTitle] = useState(bookprops[0].title);
  const [downloadCount, setDLoadCount] = useState(bookprops[0].download_count);
  const [mediaType, setMediaType] = useState(bookprops[0].media_type);
  const [state, dispatchBase] = useReducer(reducer, {});
  const dispatch = dispatchMiddleware(dispatchBase);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "EDIT_BOOK", payload: e.target.value });
  }

  return (
    <FormStyles onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-25">
          <label htmlFor="fname">Name of the Book</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            id="name"
            name="title"
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-25">
          <label htmlFor="fname">Download Count</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            id="name"
            name="title"
            value={downloadCount}
            onChange={e => {
              setDLoadCount(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-25">
          <label htmlFor="fname">Media Type</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            id="name"
            name="title"
            value={mediaType}
            onChange={e => {
              setMediaType(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="row">
        <input type="submit" value="Submit" />
      </div>
    </FormStyles>
  );
}

export default Form;

//styles
const FormStyles = styled.form`
  input[type="text"],
  select,
  textarea {
    width: 80%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }

  label {
    padding: 12px 12px 12px 0;
    display: inline-block;
  }

  input[type="submit"] {
    background-color: #4caf50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
  }

  input[type="submit"]:hover {
    background-color: #45a049;
  }

  .container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }

  .col-25 {
    float: left;
    width: 25%;
    margin-top: 6px;
  }

  .col-75 {
    float: left;
    width: 75%;
    margin-top: 6px;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }
`;
