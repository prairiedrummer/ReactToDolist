export function addTodo(todo) {
  return {
    type: "ADD_TODO",
    payload: {
      todo
    }
  };
}

export function toggleDone(id) {
  return {
    type: "TOGGLE_DONE",
    payload: {
      id
    }
  };
}
