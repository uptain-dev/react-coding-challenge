import axios from "axios";

export function dispatchMiddleware(dispatch) {
  return async action => {
    switch (action.type) {
      case "LOAD":
        try {
          const result = await axios(`http://localhost:3010/subjects`);
          dispatch({ type: "LOAD_SUCCESS", data: result.data });
        } catch (e) {
          dispatch({ type: "LOAD_ERROR" });
        }
        break;

      case "LOAD_BOOK":
        try {
          const result = await axios(
            `http://localhost:3010/books?subjects_like=${action.payload}`
          );
          dispatch({ type: "LOAD_BOOK_SUCCESS", data: result.data });
        } catch (e) {
          dispatch({ type: "LOAD_ERROR" });
        }
        break;

      case "EDIT_BOOK":
        console.log("EDIT BOOK");
        try {
          dispatch({
            type: "LOAD_EDIT_BOOK_SUCCESS",
            editedBook: action.payload
          });
        } catch (e) {
          dispatch({ type: "LOAD_ERROR" });
        }
        break;

      default:
        return dispatch(action);
    }
  };
}

export function reducer(state, action) {
  console.log(action.type);

  switch (action.type) {
    case "INIT_LOAD":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "LOAD_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.data
      };

    case "LOAD_BOOK_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        bookData: action.data
      };

    case "LOAD_EDIT_BOOK_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        bookData: action.editedBook
      };

    case "LOAD_BOOK_DETAILS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        bookDetails: state.bookData.filter(item => item.id == action.payload)
      };

    case "LOAD_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
}

// const initialState = {
//   isSubject: true,
//   isLoading: false,
//   isError: false,
//   data: [],
//   bookData: [],
//   bookDetails: []
// };
