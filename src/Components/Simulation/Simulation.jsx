import React, { useState, useEffect } from "react";
import "./Simulation.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Simulation() {
  const [params, setParams] = useState({
    rainfall_percentage: 85,
    dam_volume: 450,
    climate_factor: 0.7,
    icp_value: 350,
    basin: "Ganges"
  });

  const [basins, setBasins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(null);
  const [mapUrl, setMapUrl] = useState(null);
  const [error, setError] = useState(null);

  // Fetch available basins on component mount
  useEffect(() => {
    fetch("http://localhost:5000/api/basins")
      .then(res => res.json())
      .then(data => setBasins(data.basins))
      .catch(err => console.error("Failed to fetch basins:", err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setParams(prev => ({
      ...prev,
      [name]: name === "climate_factor" ? parseFloat(value) : 
              name === "basin" ? value : 
              parseFloat(value)
    }));
  };

  const runSimulation = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/assess", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params)
      });

      if (!response.ok) {
        throw new Error("Failed to run simulation");
      }

      const data = await response.json();
      
      if (data.success) {
        setReport(data.report);
        // Use map_view_url instead of map_download_url for inline display
        setMapUrl(`http://localhost:5000${data.map_view_url}`);
      } else {
        setError(data.error || "Simulation failed");
      }
    } catch (err) {
      setError(err.message);
      console.error("Simulation error:", err);
    } finally {
      setLoading(false);
    }
  };

  const getRiskColor = (category) => {
    const colors = {
      'No Risk': '#28a745',
      'Low Risk': '#90ee90',
      'Medium Risk': '#ffa500',
      'High Risk': '#ffb6c1',
      'Very High Risk': '#dc3545'
    };
    return colors[category] || '#6c757d';
  };

  return (
    <>
      <Navbar />
      <div className="simulation-container">
        <h2>Scenario Simulator</h2>
        
        {error && (
          <div style={{
            padding: '15px',
            background: '#f8d7da',
            color: '#721c24',
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            Error: {error}
          </div>
        )}

        {/* Top section: Parameters + Map */}
        <div className="simulation-top">
          {/* Left side (parameters + insights) */}
          <div className="simulation-left">
            <div className="parameters-box">
              <h3>Simulation Parameters</h3>
              
              <label>Rainfall Percentage: {params.rainfall_percentage}%</label>
              <input
                type="range"
                name="rainfall_percentage"
                min="0"
                max="100"
                value={params.rainfall_percentage}
                onChange={handleInputChange}
              />

              <label>Dam/Reservoir Volume: {params.dam_volume} million m³</label>
              <input
                type="range"
                name="dam_volume"
                min="0"
                max="1000"
                value={params.dam_volume}
                onChange={handleInputChange}
              />

              <label>Climate Change Factor: {params.climate_factor}</label>
              <input
                type="range"
                name="climate_factor"
                min="0"
                max="1"
                step="0.01"
                value={params.climate_factor}
                onChange={handleInputChange}
              />

              <label>ICP (m³): {params.icp_value}</label>
              <input
                type="range"
                name="icp_value"
                min="0"
                max="500"
                value={params.icp_value}
                onChange={handleInputChange}
              />

              <label>River Basin</label>
              <select
                name="basin"
                value={params.basin}
                onChange={handleInputChange}
              >
                {basins.length > 0 ? (
                  basins.map(basin => (
                    <option key={basin} value={basin}>{basin}</option>
                  ))
                ) : (
                  <>
                    <option value="Ganges">Ganges</option>
                    <option value="Brahmaputra">Brahmaputra</option>
                    <option value="Indus">Indus</option>
                    <option value="Godavari">Godavari</option>
                    <option value="Krishna">Krishna</option>
                    <option value="Mahanadi">Mahanadi</option>
                    <option value="Narmada">Narmada</option>
                  </>
                )}
              </select>

              <button 
                className="run-btn" 
                onClick={runSimulation}
                disabled={loading}
              >
                {loading ? "Running..." : "Run Simulation"}
              </button>
            </div>

            <div className="insights-box">
              <h3>Quick Insights</h3>
              {report ? (
                <>
                  <div style={{
                    padding: '10px',
                    background: getRiskColor(report.risk_category),
                    color: 'white',
                    borderRadius: '5px',
                    marginBottom: '10px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}>
                    {report.risk_category}
                  </div>
                  <p><strong>Risk Score:</strong> {report.risk_score.toFixed(2)}</p>
                  <p><strong>Basin:</strong> {report.basin}</p>
                  <div style={{ marginTop: '10px' }}>
                    <strong>Recommendations:</strong>
                    <ul style={{ 
                      fontSize: '12px', 
                      paddingLeft: '20px',
                      marginTop: '5px' 
                    }}>
                      {report.recommendations.map((rec, idx) => (
                        <li key={idx}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <p>
                  Adjust parameters and click "Run Simulation" to view flood risk
                  assessment for the selected basin. The system will analyze
                  potential impact on population, economy, and water levels.
                </p>
              )}
            </div>
          </div>

          {/* Right side: Interactive Map - NOW DISPLAYS INLINE */}
          <div className="simulation-map">
            {loading ? (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '500px',
                background: '#f5f5f5',
                borderRadius: '8px',
                color: '#666'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    border: '4px solid #f3f3f3',
                    borderTop: '4px solid #0077ff',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    animation: 'spin 1s linear infinite',
                    margin: '0 auto 15px'
                  }}></div>
                  <p style={{ fontSize: '16px' }}>Generating flood risk map...</p>
                </div>
              </div>
            ) : mapUrl ? (
              <iframe
                key={mapUrl} // Force reload when URL changes
                src={mapUrl}
                title="Flood Simulation Map"
                width="100%"
                height="100%"
                style={{ 
                  border: "none", 
                  borderRadius: "8px", 
                  minHeight: "500px",
                  display: 'block'
                }}
              />
            ) : (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '500px',
                background: '#f5f5f5',
                borderRadius: '8px',
                color: '#666'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '20px', marginBottom: '10px' }}>
                    🗺️ Interactive Flood Risk Map
                  </p>
                  <p style={{ fontSize: '14px', color: '#999' }}>
                    Adjust parameters and click "Run Simulation"
                  </p>
                  <p style={{ fontSize: '14px', color: '#999' }}>
                    to generate the flood risk assessment map
                  </p>
                </div>
              </div>
            )}
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
      <Footer />

      {/* Add CSS animation for loading spinner */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}