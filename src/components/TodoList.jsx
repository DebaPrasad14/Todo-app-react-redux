import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { filterTodos, updateSearchTerm } from "../redux/actions";
import { FaSearch } from "react-icons/fa";

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    const searchTerm = useSelector((state) => state.searchTerm);
    const currentFilter = useSelector((state) => state.filter);

    const filteredTodos = useMemo(() => {
        return todos.filter((todo) => {
            const matchesFilter =
                (currentFilter === "COMPLETED" && todo.completed) ||
                (currentFilter === "INCOMPLETE" && !todo.completed) ||
                currentFilter === "ALL";

            const matchesSearch = todo.text
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            return matchesSearch && matchesFilter;
        });
    });

    const changeFilter = (newFilter) => {
        dispatch(filterTodos(newFilter));
    };

    const changeSeachTerm = (value) => {
        dispatch(updateSearchTerm(value));
    };

    return (
        <>
            <div className="flex justify-between mb-6">
                <div className="relative">
                    <FaSearch
                        size={16}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    />
                    <input
                        type="search"
                        className="text-sm px-3 py-2 pl-10 rounded border border-gray-300 focus:outline-none"
                        placeholder="Search..."
                        value={searchTerm || ""}
                        onChange={(e) => changeSeachTerm(e.target.value)}
                    />
                </div>
                <div className="flex align-top">
                    <select
                        className="text-sm px-3 py-2 rounded border border-gray-300 focus:outline-none"
                        value={currentFilter}
                        onChange={(e) => changeFilter(e.target.value)}
                    >
                        <option value="ALL">Default</option>
                        <option value="COMPLETED">Completed</option>
                        <option value="INCOMPLETE">Incomplete</option>
                    </select>
                </div>
            </div>
            <ul>
                {filteredTodos.length ? (
                    filteredTodos.map((todo, index) => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))
                ) : (
                    <p className="text">No list available</p>
                )}
            </ul>
        </>
    );
};

export default TodoList;
