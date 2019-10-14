import React, { useReducer, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { reducer, dispatchMiddleware } from "../../store/reducer";
import Form from "./Form";
import Nav from "../Presentation/Nav";

const initialState = {
  isSubject: true,
  isLoading: false,
  isError: false,
  data: [],
  bookData: [],
  bookDetails: []
};

export default function Book() {
  const [state, dispatchBase] = useReducer(reducer, initialState);
  const [isSubject, setSubject] = useState({ selected: false });
  const [isEditing, setEditing] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const dispatch = dispatchMiddleware(dispatchBase);

  useEffect(() => {
    console.log("first on load ");
    dispatch({ type: "INIT_LOAD" });
    dispatch({ type: "LOAD" });
  }, []);

  function handleSelect(e) {
    dispatch({ type: "LOAD_BOOK", payload: e.target.value });
    if (e.target.value === "Science" || e.target.value === "Fiction")
      setSubject({ selected: true });
    else setSubject({ selected: false });
  }

  function showDetails(id) {
    dispatch({ type: "LOAD_BOOK_DETAILS", payload: id });
  }

  function showBookDetails(book) {
    // return result.map(item => {
    // return item.subjects.map((val, idx) => <div key={idx}>{val}</div>);
    // });

    return Object.entries(book).map(([k, value], i) => {
      return (
        <BookTable>
          {typeof value !== "object" ? (
            <div key={i}>
              <strong>{k}</strong>: {value}
            </div>
          ) : (
            <div key={i}>
              <strong>{k}</strong>: {showBookDetails(value)}
            </div>
          )}
        </BookTable>
      );
    });
  }

  let Display = null;

  if (state.isLoading) {
    Display = <div>Loading...</div>;
  }
  if (state.isError) {
    Display = <div>Error</div>;
  }

  return (
    <Container>
      <Nav />
      <TableStyles>
        <select onChange={handleSelect}>
          <option value="selectSubject"> Select subject</option>;
          {state.data.map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        {isSubject.selected && (
          <table>
            <tr>
              <th>Title of Books</th>
              <th>Actions</th>
            </tr>
            {state.bookData.map(book => {
              return (
                <>
                  <tr key={book.id} id={book.id}>
                    <td>{book.title}</td>
                    <td>
                      <button
                        onClick={() => {
                          showDetails(book.id);
                          setOpen(true);
                        }}
                      >
                        Details
                      </button>
                      <button
                        onClick={() => {
                          showDetails(book.id);
                          setEditing(true);
                          setOpen(false);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </table>
        )}
        {/* {Display} */}
        {isOpen && (
          <BookDetailsDiv>{showBookDetails(state.bookDetails)}</BookDetailsDiv>
        )}
        {isEditing && <Form bookprops={state.bookDetails} />}
      </TableStyles>
    </Container>
  );
}

const BookTable = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #f9f9f9;
`;

const BookDetailsDiv = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const TableStyles = styled.div`
  table {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:nth-of-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4caf50;
    color: white;
  }

  select {
    margin-left: 45%;
    font-size: 1.3rem;
  }
`;

const Container = styled.div`
  width: 100%;
`;
