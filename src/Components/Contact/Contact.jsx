
import React from "react";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
  FaGlobe,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <h1 className="contact-title">Get in Touch with IndusTwin</h1>
        <p className="contact-subtitle">
          We'd love to hear from you. Whether you have questions about our
          platform, need support, or want to explore partnership opportunities,
          our team is ready to assist.
        </p>

        {/* ===== Top Row: Send Message + Subscribe ===== */}
        <div className="contact-cards">
          {/* Left: Send Message */}
          <div className="card form-card">
            <h3 className="card-title">Send us a message</h3>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="your.email@example.com" />
              <textarea placeholder="Please enter your query"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Right: Subscribe */}
          <div className="card subscribe-card">
            <h3 className="card-title">Subscribe to Alerts</h3>
            <p>Receive critical warnings directly via your preferred channel.</p>
            <form className="subscribe-form">
              <label>Email Address</label>
              <input type="email" placeholder="Enter email" />
              <label>Preferred Channel</label>
              <div className="checkbox-group">
                <label>
                  <input type="checkbox" /> Email
                </label>
                <label>
                  <input type="checkbox" /> SMS
                </label>
                <label>
                  <input type="checkbox" /> WhatsApp
                </label>
              </div>
              <button type="submit">Subscribe Now</button>
            </form>
          </div>
        </div>

        {/* ===== Bottom Row: Reach Out ===== */}
<div className="reachout-box">
  <h3>Reach Out</h3>

  {/* Row 1: Email | Phone | Address */}
  <div className="reachout-row">
    <div className="reachout-item">
      <FaEnvelope className="icon" />
      {/* <strong>Email</strong> */}
      <span>contact@industwin.org</span>
    </div>

    <div className="reachout-item">
      <FaPhoneAlt className="icon" />
      {/* <strong>Phone</strong> */}
      <span>+1 (823) 123-4527</span>
    </div>

    <div className="reachout-item">
      <FaMapMarkerAlt className="icon" />
      {/* <strong>Address</strong> */}
      <span>1232 New Baton Way, Bree City, Earth</span>
    </div>
  </div>

  {/* Row 2: Follow Us */}
  <div className="reachout-follow">
    {/* <strong>Follow Us</strong> */}
    <div className="reachout-socials">
      <a href="#">
        <FaGlobe className="icon" /> Website
      </a>
      <a href="#">
        <FaTwitter className="icon" /> Twitter
      </a>
      <a href="#">
        <FaLinkedin className="icon" /> LinkedIn
      </a>
    </div>
  </div>
</div>

      </div>
      <Footer />
    </>
  );
}
