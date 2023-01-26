import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

const List = () => {
  const todos = useSelector((state) => state.Todo.todos);

  return (
    <div>
      <ul className="allTodos">
        {todos && todos.map((t) => <Task key={t.id} t={t} />)},
      </ul>
    </div>
  );
};

export default List;
