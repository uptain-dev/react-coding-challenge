import PropTypes from 'prop-types';
import { assocPath } from 'ramda';
import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label } from 'reactstrap';

export const EditableBookForm = ({ data, saveBook }) => {
  const [model, setModel] = useState(data);
  useEffect(() => {
    setModel(data);
  }, [data]);

  const onChangeHandler = path => event => {
    updateBook(path, event.target.value);
  };
  const updateBook = (path, value) => {
    setModel({ ...assocPath(path, value, model) });
  };
  const handleSubmit = () => {
    saveBook(model);
  };

  return (
    model && (
      <Form>
        <h4>Edit Book info</h4>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Title</InputGroupText>
          </InputGroupAddon>
          <Input value={model.title} onChange={onChangeHandler(['title'])} />
        </InputGroup>
        <br />

        <FormGroup>
          <Label>Authors</Label>
          {model.authors.map((author, authorIndex) =>
            Object.keys(author).map((key, index) => (
              <InputGroup key={index}>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>{key}</InputGroupText>
                </InputGroupAddon>
                <Input value={author[key]} onChange={onChangeHandler(['authors', authorIndex, key])} />
              </InputGroup>
            ))
          )}
        </FormGroup>
        <br />

        <FormGroup>
          <Label>Bookshelves</Label>
          {model.bookshelves.map((bookshelve, index) => (
            <InputGroup key={index}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>{index + 1}</InputGroupText>
              </InputGroupAddon>
              <Input value={bookshelve} onChange={onChangeHandler(['bookshelves', index])} />
            </InputGroup>
          ))}
        </FormGroup>
        <br />

        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Download count</InputGroupText>
          </InputGroupAddon>
          <Input value={model.download_count} onChange={onChangeHandler(['download_count'])} />
        </InputGroup>
        <br />

        <FormGroup>
          <Label>Formats</Label>
          {Object.keys(model.formats).map((formatKey, index) => (
            <InputGroup key={index}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>{formatKey}</InputGroupText>
              </InputGroupAddon>
              <Input value={model.formats[formatKey]} onChange={onChangeHandler(['formats', formatKey])} />
            </InputGroup>
          ))}
        </FormGroup>
        <br />

        <FormGroup>
          <Label>Languages</Label>
          {model.languages.map((language, index) => (
            <InputGroup key={index}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>{index + 1}</InputGroupText>
              </InputGroupAddon>
              <Input value={language} onChange={onChangeHandler(['languages', index])} />
            </InputGroup>
          ))}
        </FormGroup>
        <br />

        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>media_type</InputGroupText>
          </InputGroupAddon>
          <Input value={model.media_type} type="text" onChange={onChangeHandler(['media_type'])} />
        </InputGroup>
        <br />

        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Id</InputGroupText>
          </InputGroupAddon>
          <Input value={model.id} type="number" onChange={onChangeHandler(['id'])} readOnly />
        </InputGroup>
        <br />

        <Button onClick={handleSubmit}>Save changes</Button>
      </Form>
    )
  );
};

EditableBookForm.propTypes = {
  data: PropTypes.shape({
    authors: PropTypes.arrayOf(
      PropTypes.shape({
        birth_year: PropTypes.number,
        death_year: PropTypes.number,
        name: PropTypes.string
      })
    ),
    bookshelves: PropTypes.arrayOf(PropTypes.string),
    download_count: PropTypes.number,
    formats: PropTypes.object,
    id: PropTypes.number,
    languages: PropTypes.arrayOf(PropTypes.string),
    media_type: PropTypes.string,
    subjects: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string
  })
};
