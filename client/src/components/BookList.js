import React from "react";

import Item from "./BookItem";

const BookList = props => {
  return (
    <>
      <Item title="Authors:" arr={props.data.authors} value="name" />
      <Item
        title="Subjects:"
        arr={props.data.subjects}
        arrKey="subjects"
        {...props}
      />
      <Item
        title="Bookshelves:"
        arr={props.data.bookshelves}
        arrKey="bookshelves"
        {...props}
      />
      <Item title="Download count:" value={props.data.download_count} />
      <Item title="Formats:" obj={props.data.formats} />
      <Item
        title="Languages:"
        arr={props.data.languages}
        arrKey="languages"
        {...props}
      />
      <Item
        title="Media type:"
        value={props.data.media_type}
        itemKey="media_type"
        {...props}
      />
    </>
  );
};

export default BookList;
