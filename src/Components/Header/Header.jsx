import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="Header mb-5 mx-auto  w-11/12">
      <nav>
        <ul className="flex py-5  items-center">
          <li className="mr-3 ">
            <NavLink className="header__navlink rounded p-2 bg-red-300" to="/">
              Home
            </NavLink>
          </li>
          <li className="mr-3 ">
            <NavLink className="header__navlink rounded p-2 bg-red-300" to="/about">
              about
            </NavLink>
          </li>
          <li className="mr-3 ">
            <NavLink className="header__navlink rounded p-2 bg-red-300" to="/login">
              login
            </NavLink>
          </li>
          <li className="mr-3 ">
            <NavLink className="header__navlink rounded p-2 bg-red-300" to="/logout">
              logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
