import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ bbcCount, cnnCount }) => {
  const data = [
    { name: "BBC News", articles: bbcCount },
    { name: "CNN", articles: cnnCount },
  ];

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2>Number of Articles Histogram</h2>
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="articles" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
