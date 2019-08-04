import React, { useReducer } from "react";
import { rootReducer } from "../reducer/reducer";

export const Store = React.createContext(); // context API -- provider/consumer

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, { todos: {} });

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
