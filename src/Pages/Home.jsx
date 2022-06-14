
import Button from "@mui/material/Button";

import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="Home mx-auto w-11/12">
      <h2>home</h2>
      <Button variant="outlined" className="p-0">
        <NavLink to="/login" className="p-2">Login</NavLink>
      </Button>
    </div>
  );
}

export default Home;
