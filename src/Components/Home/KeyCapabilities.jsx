import React from "react";
import "./KeyCapabilities.css";

const KeyCapabilities = () => {
  return (
    <section className="capabilities">
      <h2>Key Capabilities of IndusTwin</h2>

      <div className="capability-grid">
        <div className="capability-card">
          <h3>Real-time Data Streams</h3>
          <p>
            Access live hydrological and meteorological data for immediate
            operational awareness and improved response planning.
          </p>
        </div>

        <div className="capability-card">
          <h3>Interactive Scenario Modeling</h3>
          <p>
            Simulate various climate and operational scenarios to assess
            potential impacts and optimize water management strategies.
          </p>
        </div>

        <div className="capability-card">
          <h3>Automated Early Warnings</h3>
          <p>
            Receive timely alerts for flood events and other environmental
            hazards, ensuring communities are prepared and safe.
          </p>
        </div>

        <div className="capability-card">
          <h3>Rich Data Visualizations</h3>
          <p>
            Explore complex data through interactive charts, graphs, and maps,
            making insights easily accessible and understandable.
          </p>
        </div>

        <div className="capability-card">
          <h3>Enhanced Climate Resilience</h3>
          <p>
            Strengthen the region’s ability to adapt to climate change through
            informed, evidence-based decision making.
          </p>
        </div>

        <div className="capability-card">
          <h3>Stakeholder Collaboration</h3>
          <p>
            Foster collaboration among governments, researchers, NGOs, and
            communities to support coordinated water resource management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeyCapabilities;
