import React from "react";
import "./Datasets.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Insights from "./Insights";

export default function Datasets() {
  const datasetList = [
    {
      title: "Indus River Basin Flow Data",
      desc: "Comprehensive river basin flow records across the Indus system (1950–2020).",
      img: "data-1.png",
    },
    {
      title: "Historical Rainfall Patterns (1950–2020)",
      desc: "Rainfall datasets & historical precipitation patterns across regions of the basin.",
      img: "data-2.png",
    },
    {
      title: "Flood Extent Mapping (Satellite Imagery)",
      desc: "Flood mapping datasets derived from high-resolution satellite imagery.",
      img: "data-3.png",
    },
    {
      title: "Agricultural Land Use & Crop Yields",
      desc: "Fields & crop yield maps, seasonal agricultural land use data for Indus Basin.",
      img: "data-4.png",
    },
    {
      title: "Socio-Economic Vulnerability Index",
      desc: "Indicators measuring community vulnerability & socio-economic conditions.",
      img: "data-5.png",
    },
    {
      title: "Groundwater Level Monitoring",
      desc: "Groundwater depth & monitoring data collected across key sites in the basin.",
      img: "data-6.png",
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="datasets-container">
      {/* Page Header */}
      <div className="datasets-header">
        <h2>Data & Insights for a Resilient Indus Basin</h2>
        <p>
          Explore comprehensive datasets, historical visualizations, and climate
          resilience insights to deepen your understanding of the Indus River
          Basin and its critical role in regional sustainability.
        </p>
      </div>

      {/* Section Title */}
      <h3 className="datasets-subtitle">Downloadable Datasets</h3>

      {/* Dataset Cards */}
      <div className="datasets-grid">
        {datasetList.map((ds, i) => (
          <div key={i} className="dataset-card">
            <img src={ds.img} alt={ds.title} />
            <div className="dataset-content">
              <h4>{ds.title}</h4>
              <p>{ds.desc}</p>
              <button>⬇ Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Insights/>
    <Footer/>
    </>
  );
}
