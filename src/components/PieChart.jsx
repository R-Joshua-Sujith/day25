import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import "./Cards.css";
const PieChart = (props) => {
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

  return (
    <div>
      <div className="pie">
        <Pie data={userData} />
      </div>
    </div>
  );
};

export default PieChart;
