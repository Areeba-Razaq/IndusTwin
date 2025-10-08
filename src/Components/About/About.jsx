import React from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function About() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="mission-vision">
        <h1>About Us</h1>

        {/* Top Section */}
        <div className="top-section">
          <h1>
            Empowering <br /> Resilience in the Indus Basin
          </h1>
          <p>
            IndusTwin is a pioneering initiative leveraging digital twin
            technology to enhance water management, climate resilience, and
            sustainable development across the Indus Basin. We provide actionable
            insights for a secure future.
          </p>
          <button className="btn-primary">Explore Our Mission</button>
        </div>

        {/* Mission & Vision Section */}
        <div className="mv-section">
          <div className="mv-box">
            <h2>Our Mission</h2>
            <p>
              To leverage advanced digital twin technology and comprehensive data
              analytics to provide actionable insights for sustainable water
              resource management, climate resilience, and socio-economic
              well-being in the Indus Basin.
            </p>
          </div>

          <div className="mv-box">
            <h2>Our Vision</h2>
            <p>
              A future where the Indus Basin flourishes with resilient ecosystems
              and thriving communities, empowered by intelligent, data-driven
              decisions that mitigate climate risks and ensure water security for
              generations to come.
            </p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
