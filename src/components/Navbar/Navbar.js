import React from "react";
import "./Navbar.scss";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours logo" />
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            about
          </Link>
        </li>
        <li>
          <Link to="/tour" className="nav-link">
            tours
          </Link>
        </li>
      </ul>
    </nav>
  );
}
