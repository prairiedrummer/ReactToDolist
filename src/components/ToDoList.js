import React, { useContext } from "react";
import Todo from "./todo";
import { Store } from "../context/context";

export default function TodoList() {
  const { state } = useContext(Store);

  const todos = Object.values(state.todos);

  return (
    <ul>
      {todos.map(todo => (
        <Todo key={`todo-${todo.id}`} todo={todo} />
      ))}
    </ul>
  );
}
