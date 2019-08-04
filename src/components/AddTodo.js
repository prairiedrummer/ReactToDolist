import React, { useState, useContext } from "react";
import { addTodo } from "../actions/actions";
import { Store } from "../context/context";

export default function AddTodo() {
  const [value, setValue] = useState("");

  const { state, dispatch } = useContext(Store);

  const onChange = e => setValue(e.target.value);

  const onSubmit = e => {
    e.preventDefault();

    const key = Reflect.ownKeys(state.todos).length;

    const todo = { name: value, id: key, done: false };

    dispatch(addTodo(todo));
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={onChange} placeholder="I need to..." />
      <button>Add</button>
    </form>
  );
}
