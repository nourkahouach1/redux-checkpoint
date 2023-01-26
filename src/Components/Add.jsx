import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodoAction } from "../redux/actions/ToDoActions";

const Add = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      taskName: todo,
      isDone: false,
    };
    dispatch(AddTodoAction(newTask));
    console.log(todo);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter a Todo"
          style={{
            width: 350,
            padding: 10,
            borderRadius: 20,
            border: "none",
            fontSize: 20,
          }}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          style={{
            padding: 12,
            borderRadius: 25,
            fontSize: 15,
            marginLeft: 20,
          }}
        >
          Go
        </button>
      </form>
    </div>
  );
};

export default Add;
