import { createContext, useState, useEffect } from "react";

const Context = createContext();

function Provider({ children }) {
  const [token, setToken] = useState(
    JSON.parse(window.localStorage.getItem("token")) || null
  );

  useEffect(() => {
    window.localStorage.setItem(JSON.stringify("token"), token);
  }, [token]);

  return (
    <Context.Provider value={{ token, setToken }}>{children}</Context.Provider>
  );
}

export { Context, Provider };
