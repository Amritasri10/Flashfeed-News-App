const NewsCard = ({ article, isDarkMode }) => {
  return (
    <div
      className={`card mx-1 my-1 ${
        isDarkMode ? "bg-secondary text-light" : ""
      }`}
    >
      {(article.urlToImage || article.image_url) && (
        <img
          src={article.urlToImage || article.image_url}
          className="card-img-top img-fluid rounded"
          alt={article.title}
        />
      )}

      <div className="card-body p-2">
        <h5 className="card-title mb-2">{article.title}</h5>
        <p className="card-text mb-2">{article.description}</p>
        <a
          href={article.url}
          className="btn btn-danger btn-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>
    </div>
  );
};


export default NewsCard;
