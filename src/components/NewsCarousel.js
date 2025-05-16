// src/components/NewsCarousel.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NewsCarousel = ({ articles }) => {
  if (!articles.length) return null;

  const topArticles = articles.slice(0, 5); // Only show top 5 in carousel

  return (
    <div className="container-fluid px-0"> {/* full width container with no horizontal padding */}
  <div id="newsCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      {topArticles.map((article, index) => (
        <div
          key={index}
          className={`carousel-item ${index === 0 ? "active" : ""}`}
        >
          <img
            src={article.urlToImage}
            className="d-block w-100"
            alt={article.title}
            style={{ height: "400px", objectFit: "cover", width: "100%" }}
          />
          <div className="carousel-caption d-none d-md-block p-3 rounded bg-opacity-50">
            <h5>{article.title}</h5>
            <p>{article.description?.substring(0, 100)}...</p>
          </div>
        </div>
      ))}
    </div>

    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#newsCarousel"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon"></span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#newsCarousel"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon"></span>
    </button>
  </div>
</div>
);
};

export default NewsCarousel;
