import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="container-nav">
      <nav className="navbar">
        <div className="logo">
          <h1>Gabby's Party Rental</h1>
        </div>
        <ul className="nav-links">
          <Link to="/" className="link">
            <li className="nav-link">Home</li>
          </Link>
          <Link to="/rentals" className="link">
            {" "}
            <li className="nav-link">Rentals</li>
          </Link>
          <Link to="/info" className="link">
            <li className="nav-link">Info</li>
          </Link>
          <Link to="/contact" className="link">
            <li className="nav-link">Contact Us</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
