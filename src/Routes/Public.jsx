import React from "react";
import { Outlet } from "react-router-dom"
function Public() {
  return (
    <div className="Public">
      <Outlet />
    </div>
  );
}

export default Public;