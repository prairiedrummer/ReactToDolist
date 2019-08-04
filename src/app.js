import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/ToDoList";
import Ledger from "./components/Ledger";

export default function App() {
  return (
    <div>
      <Ledger />
      <AddTodo />
      <TodoList />
    </div>
  );
}
