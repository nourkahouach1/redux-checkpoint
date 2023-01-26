import React from "react";
import { useDispatch } from "react-redux";
import { RemoveToDoAction } from "../redux/actions/ToDoActions";

const Task = ({ t }) => {
  const dispatch = useDispatch();
  const removeHandler = (t) => {
    dispatch(RemoveToDoAction(t.id));
  };
  return (
    <div>
      <li key={t.id} className="singleTodo">
        <span className="todoText">{t.taskName}</span>
        <button
          style={{
            borderRadius: 25,
            padding: 10,
            border: "1px solid white ",
            color: "white",
            backgroundColor: "orangered",
          }}
          onClick={() => removeHandler(t)}
        >
          Delete
        </button >
      </li>
    </div>
  );
};

export default Task;
