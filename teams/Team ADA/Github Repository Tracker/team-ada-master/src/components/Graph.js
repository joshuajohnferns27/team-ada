import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Title,
} from "chart.js";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Title
);

function Graph() {
  const data = {
    labels: [
      "3 Weeks",
      "1 Month",
      "2 Months",
      "4 Months",
      "6 Months",
      "1 Year",
    ],
    datasets: [
      {
        label: "No. of Violations",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "red",
          "blue",
          "#ffc107",
          "rgb(87, 185, 96)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 3,
      },
    ],
  };
  return (
    <>
      <div className="header">
        <div className="links"></div>
      </div>
      <Line data={data} />
    </>
  );
}

export default Graph;
