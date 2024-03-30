import React from "react";

const DataList = ({ data }) => {
  return (
    <div className="data-list">
      <h2>Data List</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
