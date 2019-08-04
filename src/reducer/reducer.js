export function rootReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.payload.todo.id]: action.payload.todo
        }
      };
    case "TOGGLE_DONE":
      const { id } = action.payload;
      const todo = state.todos[id];

      return {
        ...state,
        todos: {
          ...state.todos,
          [id]: {
            ...todo,
            done: !todo.done
          }
        }
      };
    default:
      throw new Error(`Action not recognized: ${action.type}`);
  }
}
