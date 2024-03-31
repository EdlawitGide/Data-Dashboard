import React from "react";
import Dashboard from "./Dashboard";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1 className="dashboard">Top news</h1>
      </header>
      <main>
        <Dashboard />
      </main>
      <footer>
        <p>Powered by NewsAPI</p>
      </footer>
    </div>
  );
};

export default App;
