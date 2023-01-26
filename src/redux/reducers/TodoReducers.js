export const initialState = {
  todos: [
    {
      id: 1,
      taskName: "learn redux",
      isDone: false,
    },
    {
      id: 2,
      taskName: "finish checkpoint ",
      isDone: false,
    },
  ],
};

export const TodoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [action.payload, ...state.todos]  
      };

    case "REMOVE_TODO":
      return {
        ...state,todos:state.todos.filter((todo)=>todo.id!==action.payload)
      }

    default:
      return state;
  }
};
