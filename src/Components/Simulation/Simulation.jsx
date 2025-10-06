import React from "react";
import "./Simulation.css"; // import the CSS file
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import FloodAlerts from "../Alerts/FloodAlerts";

export default function Simulation() {
  return (
    <>
    <Navbar/>
    <div className="simulation-container">
      <h2>Scenerio Simulator</h2>
      {/* Top section: Parameters + Map */}
      <div className="simulation-top">
        {/* Left side (parameters + insights) */}
        <div className="simulation-left">
          <div className="parameters-box">
            <h3>Simulation Parameters</h3>
            <label>Rainfall Percentage</label>
            <input type="range" min="0" max="100" defaultValue="0" />

            <label>Dam/Reservoir Volume</label>
            <input type="range" min="0" max="100" defaultValue="0" />

            <label>Climate Change Factor</label>
            <input type="range" min="0" max="100" defaultValue="0" />

            <label>ICP (m³) (Hydraulic Indicator)</label>
            <select>
              <option>Select ICP Value</option>
              <option>Value 1</option>
              <option>Value 2</option>
            </select>

            <label>River Basin</label>
            <select>
              <option>Select Basin</option>
              <option>Basin A</option>
              <option>Basin B</option>
            </select>

            <button className="run-btn">Run Simulation</button>
          </div>

          <div className="insights-box">
            <h3>Quick Insights</h3>
            <p>
              Current Simulation indicates potential flood risk across selected
              basin. Adjust parameters to view impact on population, economy, and
              water levels.
            </p>
          </div>
        </div>

        {/* Right side (Map) */}
        <div className="simulation-map">
          <img src="simulator.png" alt="Flood Risk Map" />
        </div>
      </div>

      {/* Bottom section: Charts */}
      <div className="simulation-bottom">
        <div className="chart-card">
          <h4>Population at Risk</h4>
          <img src="population-graph.png" alt="Population Graph" />
        </div>
        <div className="chart-card">
          <h4>Economic Impact</h4>
          <img src="simulator-graph-2.png" alt="Economic Graph" />
        </div>
        <div className="chart-card">
          <h4>Water Level Forecast</h4>
          <img src="simulator-graph-3.png" alt="Water Level Graph" />
        </div>
      </div>
    </div>
    <FloodAlerts/>
    <Footer/>
    </>
  );
}
