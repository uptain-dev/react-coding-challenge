import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText } from '@material-ui/core';

const SimpleList = (props) => {
  const { items, onItemClick } = props;

  return (
    <List component="nav">
      {
        items.map(({ title, value }) => (
          <ListItem button onClick={onItemClick(value)} key={value}>
            <ListItemText primary={title} />
          </ListItem>
        ))
      }
    </List>
  );
};

SimpleList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.any,
  })).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default SimpleList;
