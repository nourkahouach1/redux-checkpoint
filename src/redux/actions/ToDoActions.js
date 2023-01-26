export const AddTodoAction = (todo) => {
  return {
    type:"ADD_TODO",
    payload: todo,
  }

}

export const RemoveToDoAction = (id) => {
return{
  type:"REMOVE_TODO",
  payload:id
};

}



