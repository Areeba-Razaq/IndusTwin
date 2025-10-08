import React from "react";
import "./KeyCapabilities.css";
import { FiDatabase, FiActivity, FiAlertTriangle, FiBarChart2, FiShield, FiUsers } from "react-icons/fi";

const capabilities = [
  {
    title: "Real-time Data Streams",
    desc: "Access live hydrological and meteorological data for immediate operational awareness and improved response planning.",
    icon: <FiDatabase />,
  },
  {
    title: "Interactive Scenario Modeling",
    desc: "Simulate various climate and operational scenarios to assess potential impacts and optimize water management strategies.",
    icon: <FiActivity />,
  },
  {
    title: "Automated Early Warnings",
    desc: "Receive timely alerts for flood events and other environmental hazards, ensuring communities are prepared and safe.",
    icon: <FiAlertTriangle />,
  },
  {
    title: "Rich Data Visualizations",
    desc: "Explore complex data through interactive charts, graphs, and maps, making insights easily accessible and understandable.",
    icon: <FiBarChart2 />,
  },
  {
    title: "Enhanced Climate Resilience",
    desc: "Strengthen the region’s ability to adapt to climate change through informed, evidence-based decision making.",
    icon: <FiShield />,
  },
  {
    title: "Stakeholder Collaboration",
    desc: "Foster collaboration among governments, researchers, NGOs, and communities to support coordinated water resource management.",
    icon: <FiUsers />,
  },
];

const KeyCapabilities = () => {
  return (
    <section className="capabilities">
      <h2>Key Capabilities of IndusTwin</h2>

      <div className="capability-grid">
        {capabilities.map((cap, index) => (
          <div className="capability-card" key={index}>
            <div className="capability-icon">{cap.icon}</div>
            <h3>{cap.title}</h3>
            <p>{cap.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyCapabilities;
