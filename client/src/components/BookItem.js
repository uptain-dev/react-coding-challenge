import React from "react";

const BookItem = props => {
  const { title, arr, obj, value } = props;
  return (
    <div>
      <p>{title}</p>
      {arr && (
        <ul>
          {arr.map((item, index) => {
            return <li key={index}>{value ? item[value] : item}</li>;
          })}
        </ul>
      )}
      {obj && (
        <ul>
          {Object.entries(obj).map((item, index) => (
            <li key={index}>
              {item[1]} <strong>{item[0]}</strong>
            </li>
          ))}
        </ul>
      )}
      {!arr && !obj && <span>{value}</span>}
    </div>
  );
};

export default BookItem;
