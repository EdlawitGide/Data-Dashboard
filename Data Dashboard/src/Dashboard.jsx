// Dashboard.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Chart from "./Chart";

const Dashboard = ({ news }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSource, setFilterSource] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterSource(e.target.value);
  };

  const filteredNews = news.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterSource === "" || item.source.name === filterSource)
  );

  const bbcCount = filteredNews.filter(
    (item) => item.source.name === "BBC News"
  ).length;
  const cnnCount = filteredNews.filter(
    (item) => item.source.name === "CNN"
  ).length;

  return (
    <div>
      <h1>Dashboard</h1>
      <input
        type="text"
        placeholder="Search news..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <select value={filterSource} onChange={handleFilterChange}>
        <option value="">All Sources</option>
        <option value="BBC News">BBC News</option>
        <option value="CNN">CNN</option>
      </select>
      <ul>
        {filteredNews.map((item) => (
          <li key={item.title}>
            <Link to={`/news/${item.title}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <Chart bbcCount={bbcCount} cnnCount={cnnCount} />
    </div>
  );
};

export default Dashboard;
