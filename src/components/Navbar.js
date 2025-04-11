import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/stats" className="nav-item">Stats</Link>
      <Link to="/settings" className="nav-item">Settings</Link>
    </nav>
  );
};

export default Navbar;
