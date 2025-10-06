// import React from "react";
// import { Bar, Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// import "./Insights.css";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export default function Insights() {
//   // Bar Chart Data
//   const barData = {
//     labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"],
//     datasets: [
//       {
//         label: "Average Floods",
//         data: [5, 8, 12, 7, 10, 14, 9],
//         backgroundColor: "#006d77",
//       },
//       {
//         label: "Major Floods",
//         data: [1, 1, 2, 1, 2, 2, 1],
//         backgroundColor: "#83c5be",
//       },
//     ],
//   };

//   // Line Chart Data
//   const lineData = {
//     labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"],
//     datasets: [
//       {
//         label: "Damage (Billions USD)",
//         data: [1, 4, 2, 3, 5, 7, 4],
//         borderColor: "#e63946",
//         backgroundColor: "rgba(230,57,70,0.2)",
//         fill: true,
//         tension: 0.4,
//       },
//     ],
//   };

//   return (
//     <div className="insights-container">
//       {/* Historical Data Visualizations */}
//       <h3 className="section-title">Historical Data Visualizations</h3>

//       <div className="chart-box">
//         <h4>Historical Flood Events by Year</h4>
//         <p>
//           Frequency and category severity of major flood events in the Indus
//           Basin.
//         </p>
//         <Bar data={barData} />
//       </div>

//       <div className="chart-box">
//         <h4>Economic Damages from Flood Events</h4>
//         <p>
//           Estimated economic impacts (in billions USD) of flood disasters over
//           recent years.
//         </p>
//         <Line data={lineData} />
//       </div>

//       {/* Climate Resilience Insights */}
//       <h3 className="section-title">Climate Resilience Insights</h3>

//       <div className="insights-grid">
//         <div className="insight-card">
//           <h4>Integrated Water Resource Management (IWRM)</h4>
//           <p>
//             Exploring how coordinated management of water, land and related
//             resources improves resilience in the Indus Basin.
//           </p>
//           <a href="/">Read More</a>
//         </div>

//         <div className="insight-card">
//           <h4>Early Warning Systems and Community Resilience</h4>
//           <p>
//             Insights into the effectiveness of predictive early warning systems
//             in reducing disaster impacts.
//           </p>
//           <a href="/">Read More</a>
//         </div>

//         <div className="insight-card">
//           <h4>Climate-Smart Agriculture Practices</h4>
//           <p>
//             Adaptive agricultural techniques that increase productivity and
//             resilience under climate stress.
//           </p>
//           <a href="/">Read More</a>
//         </div>

//         <div className="insight-card">
//           <h4>Role of Digital Twins in Predictive Modeling</h4>
//           <p>
//             Advanced simulation and digital twin models for better prediction
//             and resilience planning.
//           </p>
//           <a href="/">Read More</a>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import "./Insights.css";

export default function Insights() {
  return (
    <div className="insights-container">
      {/* Historical Data Visualizations */}
      <h3 className="section-title">Historical Data Visualizations</h3>

      <div className="chart-box">
        <h4>Historical Flood Events by Year</h4>
        <p>
          Frequency and category severity of major flood events in the Indus Basin.
        </p>
        <img
          src="data-result.png"
          alt="Historical Flood Events by Year"
          className="chart-img"
        />
      </div>

      <div className="chart-box">
        <h4>Economic Damages from Flood Events</h4>
        <p>
          Estimated economic impacts (in billions USD) of flood disasters over recent years.
        </p>
        <img
          src="data-result-2.png"
          alt="Economic Damages from Flood Events"
          className="chart-img"
        />
      </div>

      {/* Climate Resilience Insights */}
      <h3 className="section-title">Climate Resilience Insights</h3>

      <div className="insights-grid">
        <div className="insight-card">
          <h4>Integrated Water Resource Management (IWRM)</h4>
          <p>
            Exploring how coordinated management of water, land and related
            resources improves resilience in the Indus Basin.
          </p>
          <a href="/">Read More</a>
        </div>

        <div className="insight-card">
          <h4>Early Warning Systems and Community Resilience</h4>
          <p>
            Insights into the effectiveness of predictive early warning systems
            in reducing disaster impacts.
          </p>
          <a href="/">Read More</a>
        </div>

        <div className="insight-card">
          <h4>Climate-Smart Agriculture Practices</h4>
          <p>
            Adaptive agricultural techniques that increase productivity and
            resilience under climate stress.
          </p>
          <a href="/">Read More</a>
        </div>

        <div className="insight-card">
          <h4>Role of Digital Twins in Predictive Modeling</h4>
          <p>
            Advanced simulation and digital twin models for better prediction
            and resilience planning.
          </p>
          <a href="/">Read More</a>
        </div>
      </div>
    </div>
  );
}
