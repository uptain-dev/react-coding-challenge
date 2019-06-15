import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, InputLabel, Select, MenuItem, makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Picker = (props) => {
  const classes = useStyles();
  const {
    name, value, items, handleChange,
  } = props;

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="select">{name}</InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        inputProps={{
          id: 'select',
        }}
      >
        {
          items.map(item => (
            <MenuItem key={item} value={item}>{item}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
};

Picker.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Picker;
