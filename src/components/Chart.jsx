import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import "./Cards.css";

const Chart = (props) => {
  const Data = props.data;
  const [userData, setUserData] = useState({
    labels: Data.map((data) => data.month),
    datasets: [
      {
        label: "Earnings",
        data: Data.map((data) => data.count),
        backgroundColor: [
          "rgb(212,165,165)",
          "rgb(176,196,177)",
          "rgb(111,125,153)",
          "rgb(179,157,191)",
          "rgb(244,122,95)",
          "rgb(165,185,87)",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const options = {
    maintainAspectRatio: false, // Set maintainAspectRatio to false
    responsive: true, // Set responsive to true
    scales: {
      x: {
        ticks: {
          color: "#1C2E35", // Change the color of X-axis labels to red
          font: {
            size: 12, // Change the font size of X-axis labels to 14 pixels
          },
        },
      },
      y: {
        ticks: {
          color: "#1C2E35", // Change the color of Y-axis labels to blue
        },
        font: {
          size: 20, // Change the font size of X-axis labels to 14 pixels
        },
      },
    },
  };

  return (
    <div>
      <div className="overview">Earnings Overview</div>
      <div className="chartContainer">
        <Bar data={userData} options={options} />
      </div>
    </div>
  );
};

export default Chart;
