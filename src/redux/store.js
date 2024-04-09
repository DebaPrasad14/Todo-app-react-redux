import { createStore, applyMiddleware } from "redux";
import todoReducer from "./reducer";
import localStorageMiddleware from "../middleware/localStorageMiddleware";

const store = createStore(todoReducer, applyMiddleware(localStorageMiddleware));

export default store;
