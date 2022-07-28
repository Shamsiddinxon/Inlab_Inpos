import React from "react";
import { Outlet,Navigate } from "react-router-dom"
import useToken from "../Hooks/useToken"

function Private() {
const [token] = useToken()

if (token !== "null" && token) {
  console.log(typeof token);
  return <Outlet/>
}
console.log(typeof token);

  return <Navigate to="/"/>
}

export default Private;