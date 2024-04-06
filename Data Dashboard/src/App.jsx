import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Dashboard from "./Dashboard";
import NewsDetail from "./NewsDetail";
import React, { useState, useEffect } from "react";

const App = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch news data
    const fetchNews = async () => {
      try {
        const apiKey = "c3980dcb9b764348b83eea0c3d8e82db";
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data.articles);
        setNews(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNews();
  }, []);
  return (
    <Router>
      <Routes>
        {" "}
        {/* Use Routes component */}
        <Route path="/" element={<Dashboard news={news} />} />{" "}
        {/* Use element prop */}
        <Route path="/news/:title" element={<NewsDetail news={news} />} />{" "}
        {/* Use element prop */}
      </Routes>
    </Router>
  );
};

export default App;
