import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav className="topnav">
    <NavLink activeClassName="active" exact to="/">
      Page One
    </NavLink>
    <NavLink activeClassName="active" to="/page-two">
      Page Two
    </NavLink>
  </nav>
);

export default Nav;
