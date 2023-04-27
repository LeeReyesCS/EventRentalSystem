import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { GiPartyPopper } from "react-icons/gi";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => {
  return (
    <div className="container-nav">
      <nav className="navbar">
        <div className="logo">
          <h1>
            Gabby's Party Rental{" "}
            <GiPartyPopper style={{ marginLeft: "20px" }} />
          </h1>
        </div>
        <ul className="nav-links">
          <Link to="/" className="link">
            <li className="nav-link">Home</li>
          </Link>
          {/* <Link to="/rentals" className="link">
            {" "}
            <li className="nav-link">Rentals</li>
          </Link> */}
          <Dropdown>
            <Dropdown.Toggle
              style={{
                border: "none",
                backgroundColor: "transparent",
                fontSize: "20px",
                position: "relative",
                bottom: "8px",
                left: "15px",
                color: "cadetblue",
                fontFamily: "Alfa Slab One",
              }}
              variant="success"
              id="dropdown-basic"
            >
              Rentals
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                Party Rental Items
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Custom Products</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Catering Services</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
