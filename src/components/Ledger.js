import React, { useContext } from "react";
import { Store } from "../context/context";

export default function Ledger() {
  const { state } = useContext(Store);

  const total = Reflect.ownKeys(state.todos).length;

  const done = Object.values(state.todos).filter(todo => todo.done).length;

  return (
    <div style={{ fontWeight: "bold" }}>
      <p>Total: {total}</p>
      <p>Done: {done}</p>
    </div>
  );
}
