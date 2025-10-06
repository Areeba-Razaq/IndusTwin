import React from "react";
import "./WaterManagement.css";

const WaterManagement = () => {
  return (
    <section className="water-management">
      <h2>Empowering Water Management Through Innovation</h2>

      <div className="wm-features">
        <div className="wm-feature">
          <div className="icon">➕</div>
          <h3>Real-time Monitoring</h3>
          <p>
            Gain continuous insights into water levels, rainfall, and river
            discharge across the Indus basin with our integrated sensor network
            and satellite imagery analysis.
          </p>
        </div>

        <div className="wm-feature">
          <div className="icon">🔄</div>
          <h3>Predictive Forecasting</h3>
          <p>
            Utilize advanced models to predict flood risks, water scarcity, and
            environmental changes, enabling proactive decision-making for climate
            resilience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaterManagement;
