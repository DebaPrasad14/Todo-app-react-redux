import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    MARK_COMPLETED,
    MARK_INCOMPLETE,
    MARK_ALL_COMPLETED,
} from "./actionTypes";

const localStorageMiddleware = store => next => action => {
    const result = next(action);
    const { type } = action;

    if([ADD_TODO, REMOVE_TODO, TOGGLE_TODO, MARK_COMPLETED, MARK_INCOMPLETE, MARK_ALL_COMPLETED].includes(type)) {
        localStorage.setItem('todos', JSON.stringify(store.getState().todos));
    }

    return result;
}

export default localStorageMiddleware;
