import React from "react";
import { createContext, useState, useEffect } from "react";

const Contextt = createContext();

function Provider({ children }) {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("selected")) || []
  );

  useEffect(
    (e) => {
      window.localStorage.setItem("selected", JSON.stringify([...state]));
    },
    [state]
  );

  return (
    <Contextt.Provider value={{ state, setState }}>
      {children}
    </Contextt.Provider>
  );
}

export { Contextt, Provider };
