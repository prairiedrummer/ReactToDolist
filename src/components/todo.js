import React, { useContext } from "react";
import { Store } from "../context/context";
import { toggleDone } from "../actions/actions";

export default function Todo({ todo }) {
  const style = {
    textDecoration: todo.done ? "line-through" : ""
  };

  const { dispatch } = useContext(Store);

  const fn = () => {
    dispatch(toggleDone(todo.id));
  };

  return (
    <li style={style} onClick={fn}>
      {todo.name}
    </li>
  );
}
