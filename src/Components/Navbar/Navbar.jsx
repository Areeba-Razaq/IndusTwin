import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu when clicking outside (but ignore hamburger itself)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
         <div className="nav-logo">
        <img src="/industwin-logo.png" alt="IndusTwin Logo" className="nav-logo-img" />
        <span className="nav-logo-text">IndusTwin</span>
      </div>

      {/* Hamburger Icon */}
      <div
        className="hamburger"
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </div>

      <ul ref={menuRef} className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" end onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" onClick={() => setIsOpen(false)}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/simulator" onClick={() => setIsOpen(false)}>
            Simulator & Alerts
          </NavLink>
        </li>
        <li>
          <NavLink to="/datasets" onClick={() => setIsOpen(false)}>
            Data & Insights
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="nav-right">
        <a href="#notifications">🔔 Notifications</a>
        <a href="#account">👤 Account</a>
      </div>
    </nav>
  );
};

export default Navbar;
