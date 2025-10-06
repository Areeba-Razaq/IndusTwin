import React from "react";
import "./Home.css";
import WaterManagement from './WaterManagement'
import KeyCapabilities from './KeyCapabilities'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <>
    <Navbar/>
    <section className="hero">
      <div className="hero-content">
        <h1>Digital Twin for Indus Basin Resilience</h1>
        <p>
          IndusTwin is an advanced web platform leveraging digital twin
          technology to provide comprehensive data visualization, interactive
          maps, and simulation tools for sustainable water management in the
          Indus Basin. Our mission is to enhance climate resilience, deliver
          early warnings, and offer precise flood risk forecasts to protect
          communities and resources.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Explore Dashboard</button>
          <button className="btn-secondary">See Predictions</button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="/hero.png" 
          alt="Indus Basin"
        />
      </div>
    </section>
    <WaterManagement/>
    <KeyCapabilities/>
    <Footer/>
    </>
  );
};

export default Home;
