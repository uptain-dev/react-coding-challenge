import React from "react";

import Item from "./BookItem";

const BookList = props => {
  return (
    <>
      <Item title="Authors:" arr={props.data.authors} value="name" />
      <Item title="Subjects:" arr={props.data.subjects} />
      <Item title="Bookshelves:" arr={props.data.bookshelves} />
      <Item title="Download count:" value={props.data.download_count} />
      <Item title="Formats:" obj={props.data.formats} />
      <Item title="Languages:" arr={props.data.languages} />
      <Item title="Media type:" value={props.data.media_type} />
    </>
  );
};

export default BookList;
