

import React, { useState } from "react";
import "./Datasets.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Insights from "./Insights";
import { Eye, FileDown } from "lucide-react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { floodDataset2022 } from "../../data/flood_damage_22";
import { RainfallTrends } from "../../data/Rainfall-trends";
import {RiverDischarge} from '../../data/River-discharge';

export default function Datasets() {
  const [selectedDataset, setSelectedDataset] = useState(null);

  // 📊 Dataset List (supports images & HTML)
  const datasetList = [
    {
      title: "Rainfall Analysis Dataset",
      desc: "Detailed analysis of rainfall trends across provinces from 1981–2025, showing distribution and seasonal variations.",
      img: "/Rainfall/avg-rainfall-in-Pakistan(1981-2025).png",
      data: RainfallTrends,
    },
    {
      title: "Flood Damage Dataset (2022)",
      desc: "Comprehensive dataset showing human, infrastructure, and agricultural losses due to 2022 floods in Pakistan.",
      img: "/Rainfall/rainfall-trend-by-province(1981-2025).png",
      data: floodDataset2022,
    },
    {
      title: "Interactive Flood Risk Map",
      desc: "Explore flood-prone regions through an interactive visualization showing spatial vulnerability data.",
      img: "data-1.png",
      data:RiverDischarge,
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

  // 📄 Handle View (open modal)
  const handleView = (dataset) => {
    if (dataset.data) setSelectedDataset(dataset);
    else alert("No structured data available for this dataset.");
  };

  // 📥 Handle Download (generate PDF)
  const handleDownload = (dataset) => {
    if (!dataset.data) {
      alert("Download not available for this dataset.");
      return;
    }

    const doc = new jsPDF("p", "pt", "a4");
    doc.setFont("helvetica", "bold");
    doc.text(dataset.title, 40, 40);
    doc.setFontSize(11);
    doc.text(dataset.desc, 40, 60);

    let y = 90;
    dataset.data.forEach((item, i) => {
      doc.setFontSize(13);
      doc.text(`${i + 1}. ${item.title}`, 40, y);
      y += 20;
      doc.setFontSize(10);
      const splitText = doc.splitTextToSize(item.desc, 500);
      doc.text(splitText, 40, y);
      y += splitText.length * 12 + 10;

      // Handle images and HTML separately
      if (item.img) {
        try {
          const img = new Image();
          img.src = process.env.PUBLIC_URL + item.img;
          doc.addImage(img, "PNG", 40, y, 500, 250);
          y += 270;
        } catch (err) {
          console.log("Error adding image:", err);
        }
      } else if (item.html) {
        doc.setFontSize(9);
        doc.text(`Interactive visualization available at: ${window.location.origin + item.html}`, 40, y);
        y += 30;
      }

      if (y > 700) {
        doc.addPage();
        y = 40;
      }
    });

    doc.save(`${dataset.title}.pdf`);
  };

  return (
    <>
      <Navbar />
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

        {/* Dataset Grid */}
        <div className="datasets-grid">
          {datasetList.map((ds, i) => (
            <div key={i} className="dataset-card">
              {ds.img ? (
                <img src={ds.img} alt={ds.title} />
              ) : ds.html ? (
                <iframe
                  src={ds.html}
                  title={ds.title}
                  className="dataset-iframe"
                  frameBorder="0"
                ></iframe>
              ) : null}

              <div className="dataset-content">
                <h4>{ds.title}</h4>
                <p>{ds.desc}</p>
                <div className="dataset-buttons">
                  <button className="view-btn" onClick={() => handleView(ds)}>
                    <Eye size={16} /> View
                  </button>
                  <button className="download-btn" onClick={() => handleDownload(ds)}>
                    <FileDown size={16} /> Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Insights />
      <Footer />

      {/* Modal View */}
      {selectedDataset && (
        <div className="modal-overlay" onClick={() => setSelectedDataset(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedDataset.title}</h2>
            <p>{selectedDataset.desc}</p>

            <div className="modal-images">
              {selectedDataset.data.map((item, i) => (
                <div key={i} className="modal-item">
                  {item.img ? (
                    <img src={item.img} alt={item.title} className="modal-img" />
                  ) : item.html ? (
                    <iframe
                      src={item.html}
                      title={item.title}
                      className="modal-iframe"
                      frameBorder="0"
                    ></iframe>
                  ) : null}
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <button className="close-btn" onClick={() => setSelectedDataset(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

