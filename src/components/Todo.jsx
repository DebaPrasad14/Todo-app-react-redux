import React, { useState } from "react";
import { useDispatch } from "react-redux"; 
import TodoList from "./TodoList";
import { addTodo } from "../redux/actions";

const Todo = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodoClick = () => {
    if(!newTodo.trim()) return;
    dispatch(addTodo(newTodo.trim()));
    setNewTodo('');
  }

    return (
      <div className="container mx-auto h-full">
        <div className="max-w-4xl mx-auto bg-gray-300 rounded p-16 sm:mt-4">
            <h1 className="text-center text-2xl font-bold uppercase mb-6">
                Todo App
            </h1>
            <div className="flex items-center gap-2">
                <input
                    id="input-todo"
                    type="text"
                    placeholder="Add todo item"
                    className="p-2 flex-grow border-1 border-gray-300 rounded focus:outline-none"
                    autoComplete="off"
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                />
                <button className="bg-blue-500 text-white py-2 px-8 rounded font-bold" onClick={handleAddTodoClick}>Add</button>
            </div>
        </div>
        <div className="max-w-4xl mx-auto bg-gray-300 rounded p-16 mt-4 overflow-y-scroll" style={{maxHeight: "calc(100vh - 256px)"}}>
          <TodoList />
        </div>
      </div>
    );
};

export default Todo;
