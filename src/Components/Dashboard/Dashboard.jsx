import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, AreaChart, Area } from 'recharts';
import { AlertTriangle, Droplets, CloudRain, MapPin, Activity, TrendingUp, Bell, Radio } from 'lucide-react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Dashboard.css';

// Simulate Pakistani river basins and cities
const PAKISTAN_REGIONS = [
  { id: 1, name: 'Sukkur', basin: 'Indus', lat: 27.7, lon: 68.9, population: 500000 },
  { id: 2, name: 'Larkana', basin: 'Indus', lat: 27.6, lon: 68.2, population: 300000 },
  { id: 3, name: 'Hyderabad', basin: 'Indus', lat: 25.4, lon: 68.4, population: 1700000 },
  { id: 4, name: 'Karachi', basin: 'Coastal', lat: 24.9, lon: 67.0, population: 16000000 },
  { id: 5, name: 'Multan', basin: 'Chenab', lat: 30.2, lon: 71.5, population: 2000000 },
  { id: 6, name: 'Lahore', basin: 'Ravi', lat: 31.5, lon: 74.3, population: 11000000 },
  { id: 7, name: 'Sialkot', basin: 'Chenab', lat: 32.5, lon: 74.5, population: 700000 },
  { id: 8, name: 'Rawalpindi', basin: 'Soan', lat: 33.6, lon: 73.0, population: 2200000 },
];

// Generate historical flood data
const generateHistoricalData = () => {
  const data = [];
  const baseDate = new Date(2020, 0, 1);
  
  for (let i = 0; i < 365 * 5; i += 7) {
    const date = new Date(baseDate);
    date.setDate(date.getDate() + i);
    const month = date.getMonth();
    
    // Monsoon season (July-September) has higher values
    const isMonsoon = month >= 6 && month <= 8;
    const seasonalFactor = isMonsoon ? 2.5 : 1.0;
    
    data.push({
      date: date.toISOString().split('T')[0],
      rainfall: Math.random() * 80 * seasonalFactor + (isMonsoon ? 20 : 5),
      discharge: Math.random() * 5000 * seasonalFactor + 2000,
      soilMoisture: Math.random() * 40 + (isMonsoon ? 60 : 30),
      floodDepth: Math.random() * 3 * seasonalFactor,
      temp: Math.random() * 15 + (isMonsoon ? 25 : 20),
    });
  }
  
  return data;
};

// LSTM-like prediction simulation
const predictFloodRisk = (recentData, region) => {
  const last7Days = recentData.slice(-7);
  
  const avgRainfall = last7Days.reduce((sum, d) => sum + d.rainfall, 0) / 7;
  const avgDischarge = last7Days.reduce((sum, d) => sum + d.discharge, 0) / 7;
  const avgSoilMoisture = last7Days.reduce((sum, d) => sum + d.soilMoisture, 0) / 7;
  
  // Weighted risk calculation
  const rainfallRisk = Math.min(avgRainfall / 100, 1.0) * 0.4;
  const dischargeRisk = Math.min(avgDischarge / 6000, 1.0) * 0.35;
  const soilRisk = Math.min(avgSoilMoisture / 100, 1.0) * 0.25;
  
  const totalRisk = rainfallRisk + dischargeRisk + soilRisk;
  
  // Add some randomness for realism
  const noise = (Math.random() - 0.5) * 0.1;
  const finalRisk = Math.max(0, Math.min(1, totalRisk + noise));
  
  return {
    probability: finalRisk,
    expectedDepth: finalRisk * 4.5,
    severity: finalRisk < 0.3 ? 'Low' : finalRisk < 0.6 ? 'Medium' : 'High',
    daysAhead: Math.floor(Math.random() * 7) + 1,
  };
};

const FloodDigitalTwin = () => {
  const [historicalData] = useState(generateHistoricalData());
  const [currentData, setCurrentData] = useState({
    rainfall: 45,
    discharge: 3500,
    soilMoisture: 65,
    temperature: 28,
    windSpeed: 12,
    humidity: 72,
  });
  
  const [selectedRegion, setSelectedRegion] = useState(PAKISTAN_REGIONS[0]);
  const [predictions, setPredictions] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [isLive, setIsLive] = useState(true);
  
  // Simulate real-time updates
  useEffect(() => {
    if (!isLive) return;
    
    const interval = setInterval(() => {
      setCurrentData(prev => ({
        rainfall: Math.max(0, prev.rainfall + (Math.random() - 0.5) * 10),
        discharge: Math.max(1000, prev.discharge + (Math.random() - 0.5) * 500),
        soilMoisture: Math.max(20, Math.min(100, prev.soilMoisture + (Math.random() - 0.5) * 5)),
        temperature: Math.max(15, Math.min(45, prev.temperature + (Math.random() - 0.5) * 2)),
        windSpeed: Math.max(0, prev.windSpeed + (Math.random() - 0.5) * 3),
        humidity: Math.max(30, Math.min(100, prev.humidity + (Math.random() - 0.5) * 5)),
      }));
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isLive]);
  
  // Update predictions
  useEffect(() => {
    const newPredictions = PAKISTAN_REGIONS.map(region => ({
      ...region,
      ...predictFloodRisk(historicalData, region),
    }));
    setPredictions(newPredictions);
    
    // Generate alerts
    const newAlerts = newPredictions
      .filter(p => p.probability > 0.6)
      .map(p => ({
        id: p.id,
        region: p.name,
        severity: p.severity,
        message: `High flood risk detected in ${p.name}. Expected in ${p.daysAhead} days.`,
        timestamp: new Date().toLocaleTimeString(),
      }));
    
    setAlerts(newAlerts);
  }, [currentData, historicalData]);
  
  const recentData = historicalData.slice(-30);
  const currentPrediction = predictions.find(p => p.id === selectedRegion.id) || {};
  
  const getRiskColor = (prob) => {
    if (prob < 0.3) return 'text-green-600 bg-green-100';
    if (prob < 0.6) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                <Droplets className="text-blue-600" size={36} />
                Pakistan Flood Digital Twin System
              </h1>
              <p className="text-gray-600 mt-2">Real-time flood prediction for Indus Basin & major river systems</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsLive(!isLive)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold ${
                  isLive ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'
                }`}
              >
                <Radio size={20} />
                {isLive ? 'LIVE' : 'PAUSED'}
              </button>
            </div>
          </div>
        </div>
        
        {/* Alerts Section */}
        {alerts.length > 0 && (
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Bell className="text-red-600" size={24} />
              <h2 className="text-xl font-bold text-red-800">Active Flood Alerts</h2>
            </div>
            <div className="space-y-2">
              {alerts.map((alert, idx) => (
                <div key={idx} className="bg-white rounded p-3 flex items-start gap-3">
                  <AlertTriangle className="text-red-600 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">{alert.message}</p>
                    <p className="text-sm text-gray-600">{alert.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Current Conditions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Rainfall</h3>
              <CloudRain className="text-blue-500" size={24} />
            </div>
            <p className="text-3xl font-bold text-gray-800">{currentData.rainfall.toFixed(1)} mm/hr</p>
            <p className="text-sm text-gray-600 mt-2">Current intensity</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">River Discharge</h3>
              <Activity className="text-cyan-500" size={24} />
            </div>
            <p className="text-3xl font-bold text-gray-800">{currentData.discharge.toFixed(0)} m³/s</p>
            <p className="text-sm text-gray-600 mt-2">Indus River flow</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Soil Moisture</h3>
              <Droplets className="text-teal-500" size={24} />
            </div>
            <p className="text-3xl font-bold text-gray-800">{currentData.soilMoisture.toFixed(1)}%</p>
            <p className="text-sm text-gray-600 mt-2">Saturation level</p>
          </div>
        </div>
        
        {/* Region Selection & Prediction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <MapPin className="text-blue-600" size={24} />
              Select Region
            </h3>
            <select
              value={selectedRegion.id}
              onChange={(e) => setSelectedRegion(PAKISTAN_REGIONS.find(r => r.id === parseInt(e.target.value)))}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
            >
              {PAKISTAN_REGIONS.map(region => (
                <option key={region.id} value={region.id}>
                  {region.name} - {region.basin} Basin
                </option>
              ))}
            </select>
            
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Population:</span>
                <span className="font-semibold">{selectedRegion.population.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Basin:</span>
                <span className="font-semibold">{selectedRegion.basin}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Coordinates:</span>
                <span className="font-semibold">{selectedRegion.lat}°N, {selectedRegion.lon}°E</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <TrendingUp className="text-blue-600" size={24} />
              ML Flood Prediction
            </h3>
            
            {currentPrediction.probability !== undefined && (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-semibold">Flood Probability</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${getRiskColor(currentPrediction.probability)}`}>
                      {(currentPrediction.probability * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className={`h-4 rounded-full transition-all duration-500 ${
                        currentPrediction.probability < 0.3 ? 'bg-green-500' :
                        currentPrediction.probability < 0.6 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${currentPrediction.probability * 100}%` }}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">Severity Level</p>
                    <p className="text-lg font-bold text-gray-800">{currentPrediction.severity}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">Expected Depth</p>
                    <p className="text-lg font-bold text-gray-800">{currentPrediction.expectedDepth.toFixed(2)} m</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">Forecast Horizon</p>
                    <p className="text-lg font-bold text-gray-800">{currentPrediction.daysAhead} days</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">Risk Category</p>
                    <p className={`text-lg font-bold ${
                      currentPrediction.probability < 0.3 ? 'text-green-600' :
                      currentPrediction.probability < 0.6 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {currentPrediction.probability < 0.3 ? 'Safe' :
                       currentPrediction.probability < 0.6 ? 'Monitor' : 'Alert'}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Historical Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Rainfall & Discharge Trends (30 Days)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={recentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="rainfall" stroke="#3b82f6" strokeWidth={2} name="Rainfall (mm/hr)" />
                <Line yAxisId="right" type="monotone" dataKey="discharge" stroke="#06b6d4" strokeWidth={2} name="Discharge (m³/s)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Soil Moisture & Temperature</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={recentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="soilMoisture" stackId="1" stroke="#14b8a6" fill="#14b8a6" fillOpacity={0.6} name="Soil Moisture (%)" />
                <Area type="monotone" dataKey="temp" stackId="2" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} name="Temperature (°C)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Regional Risk Map */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Regional Flood Risk Assessment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {predictions.map(pred => (
              <div
                key={pred.id}
                className={`rounded-lg p-4 border-2 cursor-pointer transition-all ${
                  selectedRegion.id === pred.id ? 'ring-4 ring-blue-500' : ''
                } ${
                  pred.probability < 0.3 ? 'bg-green-50 border-green-300' :
                  pred.probability < 0.6 ? 'bg-yellow-50 border-yellow-300' :
                  'bg-red-50 border-red-300'
                }`}
                onClick={() => setSelectedRegion(PAKISTAN_REGIONS.find(r => r.id === pred.id))}
              >
                <h4 className="font-bold text-gray-800 mb-2">{pred.name}</h4>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-700">Risk: <span className="font-semibold">{(pred.probability * 100).toFixed(0)}%</span></p>
                  <p className="text-gray-700">Depth: <span className="font-semibold">{pred.expectedDepth.toFixed(1)}m</span></p>
                  <p className="text-gray-700">Status: <span className="font-semibold">{pred.severity}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>Digital Twin System powered by ML/AI • Real-time data simulation for Pakistan's river basins</p>
          <p className="mt-1">Data sources: Simulated sensor network, satellite imagery, and hydrological models</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default FloodDigitalTwin;