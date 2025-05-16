const categories = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

const CategoryTabs = ({ onCategoryChange, activeCategory, isDarkMode }) => {
  return (
    <div
      className={`d-flex justify-content-center gap-3 py-2 ${
        isDarkMode ? "bg-secondary text-white" : "bg-light text-dark"
      }`}
      style={{ borderBottom: isDarkMode ? "2px solid #ffdb58" : "2px solid #333" }}
    >
      {categories.map((category) => (
        <button
          key={category}
          className={`btn ${
            activeCategory === category
              ? isDarkMode
                ? "btn-warning" // mustard yellow in dark mode active tab
                : "btn-danger" // red in light mode active tab
              : isDarkMode
              ? "btn-outline-light"
              : "btn-outline-danger"
          }`}
          onClick={() => onCategoryChange(category)}
          style={{ textTransform: "capitalize" }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
