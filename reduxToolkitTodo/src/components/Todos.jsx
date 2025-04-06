import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleUpdate = (todo) => {
    const updatedText = prompt("Enter updated todo:", todo.text);
    if (updatedText && updatedText.trim() !== "") {
      dispatch(updateTodo({ id: todo.id, text: updatedText }));
    }
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <div className="flex gap-2">
              <button
                onClick={() => handleUpdate(todo)}
                className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="w-6 h-6"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#e57373"
                    d="M42.6,9.1l-3.7-3.7c-0.6-0.6-1.5-0.6-2,0l-1.7,1.7l5.7,5.7l1.7-1.7C43.1,10.5,43.1,9.6,42.6,9.             1"
                  ></path>
                  <path
                    fill="#ff9800"
                    d="M38,15.6L12.6,41.1l-5.7-5.7L32.4,10L38,15.6z"
                  ></path>
                  <path
                    fill="#b0bec5"
                    d="M32.             4,10l2.8-2.8l5.7,5.7L38,15.6L32.4,10z"
                  ></path>
                  <path
                    fill="#ffc107"
                    d="M6.9,35.4L5,43l7.6-1.9L6.9,35.4z"
                  ></path>
                  <path fill="#37474f" d="M6,39.2L5,43l3.8-1L6,39.2z"></path>
                </svg>
              </button>

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
