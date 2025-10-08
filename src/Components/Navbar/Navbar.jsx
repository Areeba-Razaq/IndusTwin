import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../Context/UserContext"; // ✅ correct import
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const { user, logoutUser } = useUser(); // ✅ use hook

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

      <div className="hamburger" ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </div>

      <ul ref={menuRef} className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/simulator">Simulator & Alerts</NavLink></li>
        <li><NavLink to="/datasets">Data & Insights</NavLink></li>
        {/* <li><NavLink to="/about">About Us</NavLink></li> */}
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      <div className="nav-right">
        {/* <a href="#notifications">🔔 Notifications</a> */}
        {user ? (
          <div className="nav-user">
            <span className="username"> {user.name}</span>
            <button className="logout-btn" onClick={logoutUser}>Logout</button>
          </div>
        ) : (
          <a href="/account">👤 Account</a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
