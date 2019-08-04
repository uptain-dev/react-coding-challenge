import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
//import promise from "redux-promise-middleware";
import books from "./reducers/books";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    combineReducers({ books }),
    composeEnhancers(applyMiddleware(thunk))
);