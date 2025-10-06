import React from "react";
import "./FloodAlerts.css";

export default function FloodAlerts() {
  return (
    <div className="flood-container">
      {/* Left Section */}
      <div className="flood-left">
        <h2>Live Flood Alerts</h2>
        <p>Immediate warnings for critical regions across the Indus Basin.</p>

        <div className="alert-cards">
          {/* Sukkur Region */}
          <div className="alert-card red">
            <h3>⚠️ Sukkur Region</h3>
            <p>
              Flood alert in Sukkur region with risk zones. Residents in
              low-lying areas advised to evacuate. Emergency services are on
              standby.
            </p>
            <div className="card-footer">
              <span>Issued 3 hrs ago</span>
              <a href="/">View Details</a>
            </div>
          </div>

          {/* Lahore Downstream */}
          <div className="alert-card red">
            <h3>⚠️ Lahore Downstream</h3>
            <p>
              Heavy rainfall upstream causing rapid rise in river levels. High
              flood risk expected across Lahore downstream within 12 hours.
            </p>
            <div className="card-footer">
              <span>Issued 6 hrs ago</span>
              <a href="/">View Details</a>
            </div>
          </div>

          {/* Peshawar Tributaries */}
          <div className="alert-card yellow">
            <h3>⚠️ Peshawar Tributaries</h3>
            <p>
              Moderate flood warning for Peshawar tributaries. Risk of overflow
              in residential areas near riverbanks. No immediate evacuation
              required.
            </p>
            <div className="card-footer">
              <span>Issued 9 hrs ago</span>
              <a href="/">View Details</a>
            </div>
          </div>

          {/* Multan Canal System */}
          <div className="alert-card green">
            <h3>✅ Multan Canal System</h3>
            <p>
              Minor overflow advisory for sections of Multan canal system. Areas
              downstream may face mild flooding, no significant risks reported.
            </p>
            <div className="card-footer">
              <span>Issued 14 hrs ago</span>
              <a href="/">View Details</a>
            </div>
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="recent-alerts">
          <h3>Recent Alerts History</h3>
          <p>See past warnings and weather resolutions.</p>
          <div className="accordion">
            <div className="accordion-item">📍 Karachi Coastal Area <span>Resolved</span></div>
            <div className="accordion-item">📍 Northern Mountain Valleys <span>Resolved</span></div>
            <div className="accordion-item">📍 Indus Delta Wetlands <span>Resolved</span></div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flood-right">
        {/* Subscribe */}
        <div className="subscribe-box">
          <h3>Subscribe to Alerts</h3>
          <p>Receive critical warnings directly via your preferred channel.</p>
          <form>
            <label>Email Address</label>
            <input type="email" placeholder="Enter email" />
            <label>Preferred Channel</label>
            <div className="checkbox-group">
              <label><input type="checkbox" /> Email</label>
              <label><input type="checkbox" /> SMS</label>
              <label><input type="checkbox" /> WhatsApp</label>
            </div>
            <button type="submit">Subscribe Now</button>
          </form>
        </div>

        {/* Safety Info */}
        <div className="safety-box">
          <h3>Flood Safety Information</h3>
          <p>
            Essential steps to take before, during, and after a flood emergency:
          </p>
          <ul>
            <li>Stay updated with official warnings</li>
            <li>Prepare emergency kits</li>
            <li>Avoid flooded roads and bridges</li>
            <li>Follow evacuation orders immediately</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
