import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Home</li>
        </NavLink>
        <li className="nav-portfolio">
          Portfolio
          <ul className="nav-projects">
            <NavLink
              to="/project-1"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Project 1</li>
            </NavLink>
            <NavLink
              to="/project-2"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Project 2</li>
            </NavLink>
            <NavLink
              to="/project-3"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Project 3</li>
            </NavLink>
            <NavLink
              to="/project-4"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Project 4</li>
            </NavLink>
          </ul>
        </li>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
