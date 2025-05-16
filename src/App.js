import React, { useEffect, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsCard from "./components/NewsCard";
import Navbar from "./components/Navbar";
import CategoryTabs from "./components/CategoryTabs";
import NewsCarousel from "./components/NewsCarousel";
import Footer from "./components/Footer";
import { fetchTopHeadlines, fetchNewsBySearch } from "./api";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState(""); // controlled input for search bar
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const [errorMessage, setErrorMessage] = useState(""); // For API errors or limits

  // Fetch news based on searchTerm or category
  const fetchNews = useCallback(async () => {
    try {
      setErrorMessage(""); // clear previous errors
      const articlesData = searchTerm
        ? await fetchNewsBySearch(searchTerm)
        : await fetchTopHeadlines(category);

      if (articlesData.length === 0) {
        setErrorMessage("No articles found or API request limit reached.");
      }
      setArticles(articlesData);
    } catch (error) {
      console.error("Failed to fetch news:", error);
      setErrorMessage("Failed to fetch news. Please try again later.");
      setArticles([]); // clear on error
    }
  }, [searchTerm, category]);

  // Fetch news on mount and whenever category or searchTerm changes
  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  // Toggle dark mode, update localStorage and body classes
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      if (newMode) {
        document.body.classList.add("bg-dark", "text-light");
        document.body.classList.remove("bg-light", "text-dark");
      } else {
        document.body.classList.add("bg-light", "text-dark");
        document.body.classList.remove("bg-dark", "text-light");
      }
      return newMode;
    });
  };

  // When user changes category: update category, reset searchTerm and input
  const handleCategoryChange = (cat) => {
    setCategory(cat);
    setSearchTerm("");      // reset search term used for fetching
    setSearchInput("");     // clear search input box
    setErrorMessage("");    // clear errors
  };

  // Update input state as user types (controlled input)
  const handleSearchChange = (term) => {
    setSearchInput(term);
  };

  // When user submits search, set searchTerm to trigger fetchNews
  const handleSearchSubmit = () => {
    if (searchInput.trim() === "") {
      setErrorMessage("Please enter a search term.");
      return;
    }
    setCategory(""); // optional: clear category if you want pure search results only
    setSearchTerm(searchInput.trim());
    setErrorMessage("");
  };

  return (
    <div
      className={`min-vh-100 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <Navbar
        onSearchChange={handleSearchChange}
        searchTerm={searchInput}         // controlled input value
        onSearchSubmit={handleSearchSubmit}
        onToggleDarkMode={toggleDarkMode}
        isDarkMode={darkMode}
      />
      <CategoryTabs
        onCategoryChange={handleCategoryChange}
        activeCategory={category}
        isDarkMode={darkMode}
      />
      <NewsCarousel articles={articles} />

      <div className="container mt-4">
        {errorMessage && (
          <p className="text-center text-danger">{errorMessage}</p>
        )}
        <div className="row">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <div
                key={index}
                className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex"
              >
                <NewsCard article={article} isDarkMode={darkMode} />
              </div>
            ))
          ) : (
            !errorMessage && <p className="text-center">No articles found.</p>
          )}
        </div>
      </div>

      <Footer isDarkMode={darkMode} />
    </div>
    
  );
};

export default App;
