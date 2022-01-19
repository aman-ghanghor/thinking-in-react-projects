import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink to="./" className="navbar-brand">Navbar</NavLink>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
