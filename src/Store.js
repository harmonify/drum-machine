import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const initialState = {
  power: true,
  volume: 20,
};
export const GlobalContext = createContext(initialState);

const Store = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {props.children}
    </GlobalContext.Provider>
  );
};
export default Store;
