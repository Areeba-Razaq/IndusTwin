
import Navbar from "../Navbar/Navbar";
import "./Dashboard.css";
import Footer from "../Footer/Footer";
const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <section className="dashboard">
      <h2>Interactive Dashboard</h2>

      {/* Top Row */}
      <div className="dashboard-top">
        {/* Real-time Data Card */}
        <div className="realtime-card">
          <div className="card-header">
            <h3>Indus River Basin: Real-time Data</h3>
            <a href="#!" className="view-map">View Full Map</a>
          </div>
          <p>Live water levels, rainfall, and flow rates across the Indus Basin.</p>
          <div className="realtime-image">
            <img className="indus-graph" src="indus.jpg" alt="River Overview" />
            <div className="overlay-label">High Risk Zone</div>
          </div>
        </div>

        {/* Flood Risk Forecast */}
        <div className="forecast-card">
          <h3>Flood Risk Forecast</h3>
          <p>Advanced forecast for the next 72 hours.</p>
          <ul>
            <li>Next 24 Hours <span className="risk low">Low Risk</span></li>
            <li>24-48 Hours <span className="risk medium">Medium Risk</span></li>
            <li>48-72 Hours <span className="risk high">High Risk</span></li>
          </ul>
          <button className="alert-btn">Set Alert Preference</button>
        </div>
      </div>

      {/* Bottom Row - Hydrological Trends */}
      <div className="trends">
        <h2>Key Hydrological Trends</h2>
        <div className="trends-grid">
          <div className="trend-card">
            <h4>River Discharge (Monthly)</h4>
            <img src="graph-1.png" alt="River Discharge Graph" />
          </div>
          <div className="trend-card">
            <h4>Rainfall Trends (Monthly)</h4>
            <img src="graph-2.png" alt="Rainfall Trends Graph" />
          </div>
          <div className="trend-card">
            <h4>Groundwater Levels (Quarterly)</h4>
            <img src="graph-3.png" alt="Groundwater Levels Graph" />
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Dashboard;
