import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <Link to="/" className="nav-item nav-link">
          About
        </Link>
        <Link to="/projects-page" className="nav-item nav-link">
          Projects
        </Link>
        <Link to="/contact-page" className="nav-item nav-link">
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
