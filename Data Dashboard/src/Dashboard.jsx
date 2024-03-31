import React, { useState, useEffect } from "react";
import "./Dashboard.css"; // Import CSS file for component styling

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "c3980dcb9b764348b83eea0c3d8e82db";
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setArticles(result.articles);
        setFilteredArticles(result.articles); // Initialize filtered articles with all articles
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArticles(filtered);
  };

  const handleFilter = (source) => {
    const filtered = articles.filter(
      (article) => article.source.name === source
    );
    setFilteredArticles(filtered);
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Filters</h2>
        <input
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <div className="filter-buttons">
          <button onClick={() => handleFilter("CNN")}>CNN</button>
          <button onClick={() => handleFilter("BBC News")}>BBC News</button>
        </div>
      </aside>
      <main className="main-content">
        {filteredArticles.map((article, index) => (
          <div key={index} className="news-card">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Dashboard;
