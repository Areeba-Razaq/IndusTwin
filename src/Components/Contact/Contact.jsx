import React from "react";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaGlobe, FaTwitter, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
export default function Contact() {
  return (
    <>
    <Navbar/>
       <div className="contact-container">
      {/* Title + Subtitle */}
      <h1 className="contact-title">Get in Touch with IndusTwin</h1>
      <p className="contact-subtitle">
        We'd love to hear from you. Whether you have questions about our
        platform, need support, or want to explore partnership opportunities,
        our team is ready to assist.
      </p>

      {/* Two Boxes */}
      <div className="contact-cards">
        {/* Left Form (Wider) */}
        <div className="card form-card">
          <h3 className="card-title">Send us a message</h3>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="your.email@example.com" />
            <textarea placeholder="Please enter your query"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right Info (Narrower) */}
        <div className="card info-card">
          <h3 className="card-title">Reach Out</h3>
            <ul className="contact-info">
            <li>
              <FaEnvelope className="icon" />
              <div>
                <strong>Email</strong>
                <br />
                contact@industwin.org
              </div>
            </li>
            <li>
              <FaPhoneAlt className="icon" />
              <div>
                <strong>Phone</strong>
                <br />
                +1 (823) 123-4527
              </div>
            </li>
            <li>
              <FaMapMarkerAlt className="icon" />
              <div>
                <strong>Address</strong>
                <br />
                1232 New Baton Way <br /> Bree City, Earth
              </div>
            </li>
          </ul>

           <h3 className="card-title">Follow Us</h3>
          <div className="social-links">
            <a href="#">
              <FaGlobe className="icon" /> Website
            </a>
            <a href="#">
              <FaTwitter className="icon" /> Twitter
            </a>
            <a href="#">
              <FaLinkedin className="icon" /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
