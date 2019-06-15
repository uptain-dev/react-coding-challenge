import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, makeStyles, TextField, Checkbox, FormControlLabel, Button, Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  format: {
    minWidth: 500,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

const BookForm = (props) => {
  const classes = useStyles();
  const {
    book, updateBook, subjectList, handleSave,
  } = props;
  const {
    id, authors, bookshelves, download_count, formats, languages, media_type, subjects, title,
  } = book;

  const handleChange = (event) => {
    const { target: { name, value, type } } = event;
    const newValue = type === 'number' ? Number(value) : value;
    updateBook(name, newValue);
  };

  const handleSubjectChange = (event) => {
    const { target: { value, checked } } = event;
    if (checked) {
      return updateBook('subjects', [...subjects, value]);
    }
    return updateBook('subjects', subjects.filter(subject => subject !== value));
  };

  const handleFormatChange = format => (event) => {
    const { target: { value } } = event;
    const newFormats = { ...formats };
    newFormats[format] = value;
    updateBook('formats', newFormats);
  };

  /**
   * Generic method to update value in a list
   * @param {string} field Field to update
   * @param {number} index Index in the array
   */
  const handleListChange = (field, index) => (event) => {
    const { target: { name, value, type } } = event;
    const newValue = type === 'number' ? Number(value) : value;
    const newFieldValue = [...book[field]];
    // When name is provided, it is the key of the object which value should be updated
    if (name) {
      newFieldValue[index][name] = newValue;
    } else {
      newFieldValue[index] = newValue;
    }
    updateBook(field, newFieldValue);
  };

  return (
    <FormControl className={classes.formControl}>
      <TextField label="ID" value={id} disabled />
      <TextField label="Title" name="title" value={title} onChange={handleChange} />
      <Typography variant="subtitle1" color="textSecondary">Authors</Typography>
      {
        authors.map(({ birth_year, death_year, name }, index) => (
          <div className={classes.row} key={index}>
            <TextField label="Name" name="name" value={name} onChange={handleListChange('authors', index)} />
            <TextField label="Birth year" name="birth_year" value={birth_year} onChange={handleListChange('authors', index)} type="number" />
            <TextField label="Death year" name="death_year" value={death_year} onChange={handleListChange('authors', index)} type="number" />
          </div>
        ))
      }
      <TextField label="Media type" name="media_type" value={media_type} onChange={handleChange} />
      <div className={classes.row}>
        <Typography variant="subtitle1" color="textSecondary">Subjects :</Typography>
        {
          subjectList.map((subject) => {
            const checked = subjects.includes(subject);

            return (
              <FormControlLabel
                key={subject}
                control={(
                  <Checkbox
                    checked={checked}
                    onChange={handleSubjectChange}
                    value={subject}
                  />
                )}
                label={subject}
              />
            );
          })
        }
      </div>
      <Typography variant="subtitle1" color="textSecondary">Bookshelves</Typography>
      {
        bookshelves.map((bookshelf, index) => (<TextField label={`Bookshelf #${index}`} value={bookshelf} onChange={handleListChange('bookshelves', index)} key={index} />))
      }
      <Typography variant="subtitle1" color="textSecondary">Formats</Typography>
      {
        Object.keys(formats).map((format, index) => {
          const url = formats[format];

          return (
            <div className={classes.row} key={index}>
              <TextField label={`URL for book in format ${format}`} className={classes.format} value={url} onChange={handleFormatChange(format)} />
            </div>
          );
        })
      }
      <Typography variant="subtitle1" color="textSecondary">Languages</Typography>
      {
        languages.map((language, index) => (<TextField label={`Language #${index}`} value={language} onChange={handleListChange('languages', index)} key={index} />))
      }
      <TextField label="Download Count" name="download_count" value={download_count} onChange={handleChange} type="number" />
      <Button onClick={handleSave}>Save to server</Button>
    </FormControl>
  );
};

BookForm.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    authors: PropTypes.arrayOf(PropTypes.shape({
      birth_year: PropTypes.number,
      death_year: PropTypes.number,
      name: PropTypes.string,
    })),
    bookshelves: PropTypes.arrayOf(PropTypes.string),
    download_count: PropTypes.number,
    formats: PropTypes.objectOf(PropTypes.string),
    languages: PropTypes.arrayOf(PropTypes.string),
    media_type: PropTypes.string,
    subjects: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
  }).isRequired,
  updateBook: PropTypes.func.isRequired,
  subjectList: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default BookForm;
