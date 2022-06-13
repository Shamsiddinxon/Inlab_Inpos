import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="Home mx-auto w-11/12">
      <h2>home</h2>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}

export default Home;
