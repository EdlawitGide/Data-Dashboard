import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./Dashboard";
import "./App.css"; // Import your CSS file for styling

const App = () => {
  return (
    <div className="app">
      <h1>Data Dashboard</h1>
      <Dashboard />
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
