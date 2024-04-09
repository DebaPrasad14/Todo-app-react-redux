import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    FILTER_TODOS,
    MARK_COMPLETED,
    MARK_INCOMPLETE,
    MARK_ALL_COMPLETED,
    UPDATE_SEARCH_TERM,
} from "./actionTypes";

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text },
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: { id },
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id },
});

export const markCompleted = (id) => ({
    type: MARK_COMPLETED,
    payload: { id },
});

export const markIncomplete = (id) => ({
    type: MARK_INCOMPLETE,
    payload: { id },
});

export const markAllComplete = () => ({
    type: MARK_ALL_COMPLETED,
});

export const filterTodos = (filter) => ({
    type: FILTER_TODOS,
    payload: { filter },
});

export const updateSearchTerm = (searchTerm) => ({
    type: UPDATE_SEARCH_TERM,
    payload: { searchTerm },
});
