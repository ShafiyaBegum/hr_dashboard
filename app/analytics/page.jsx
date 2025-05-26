"use client";

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { departments, getRandomPerformance } from "../../lib/mockData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AnalyticsPage() {
  // Mock data for average rating per department
  const [avgRatings, setAvgRatings] = useState({});

  useEffect(() => {
    const data = {};
    departments.forEach((d) => {
      data[d] = Math.floor(Math.random() * 5) + 1;
    });
    setAvgRatings(data);
  }, []);

  const data = {
    labels: Object.keys(avgRatings),
    datasets: [
      {
        label: "Avg Performance Rating",
        data: Object.values(avgRatings),
        backgroundColor: "rgba(59, 130, 246, 0.7)", // Tailwind blue-500 with opacity
      },
    ],
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>
      <Bar data={data} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
    </div>
  );
}
