import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";


// if the menu is open
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
 

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu after clicking a link on mobile
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={assets.logo} alt="Revere Dental Clinic Logo" />
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick} 
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/doctors"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}
          >
            Doctors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      <div className="nav-right">
        <Link to="/appointments">
          <button onClick={handleLinkClick}>Book Now</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
