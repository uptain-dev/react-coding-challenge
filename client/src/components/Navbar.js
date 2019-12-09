import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar as Nav } from "react-bootstrap";

import "../assets/stylesheet/navbar.scss";

const Navbar = props => {
  return (
    <Nav expand="lg" bg="" variant="">
      {props.location.pathname === "/" ? (
        <NavLink to="/subjects">Subjects</NavLink>
      ) : (
        <NavLink to="/">Home</NavLink>
      )}
      <Nav.Collapse className="justify-content-end">
        <Nav.Text>uptain React Coding Challenge</Nav.Text>
      </Nav.Collapse>
    </Nav>
  );
};

export default Navbar;
