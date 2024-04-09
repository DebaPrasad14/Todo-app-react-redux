import React from "react";
import { useDispatch } from "react-redux";
import {
    toggleTodo,
    removeTodo,
    markCompleted,
    markIncomplete,
} from "../redux/actions";
import {
    FaTrashAlt,
    FaCheck,
    FaTimes,
    FaToggleOff,
    FaToggleOn,
} from "react-icons/fa";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <li className="flex py-3 border-b-2">
            <div
                className={`flex-1 ${
                    todo.completed ? "text-gray-500" : ""
                }`}
            >
                <span className="mr-4">{todo.id + 1}.</span>
                <span className={`${todo.completed ? "line-through" : ""}`}>{todo.text}</span>
            </div>
            <div className="fl">
                <button
                    className="mr-2 text-sm bg-blue-500 text-white px-2 py-2 rounded"
                    onClick={() => dispatch(toggleTodo(todo.id))}
                >
                    {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
                </button>
                <button
                    className="mr-2 text-sm bg-red-500 text-white px-2 py-2 rounded"
                    onClick={() => dispatch(removeTodo(todo.id))}
                >
                    <FaTrashAlt />
                </button>

                {todo.completed ? (
                    <button
                        className="text-sm text-white px-2 py-2 rounded bg-yellow-500"
                        onClick={() => dispatch(markIncomplete(todo.id))}
                    >
                        <FaTimes />
                    </button>
                ) : (
                    <button
                        className="text-sm text-white px-2 py-2 rounded bg-green-500"
                        onClick={() => dispatch(markCompleted(todo.id))}
                    >
                        <FaCheck />
                    </button>
                )}
            </div>
        </li>
    );
};

export default TodoItem;
