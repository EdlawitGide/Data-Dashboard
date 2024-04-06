// NewsDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";

const NewsDetail = ({ news }) => {
  const { title } = useParams();
  const selectedItem = news.find((item) => item.title === title);
  console.log(news);
  console.log(title);

  if (!selectedItem) {
    return <div>News not found!</div>;
  }

  return (
    <div>
      <h1>News Detail</h1>
      <h2>{selectedItem.title}</h2>
      <p>{selectedItem.description}</p>
      {/* Display more details as needed */}
    </div>
  );
};

export default NewsDetail;
