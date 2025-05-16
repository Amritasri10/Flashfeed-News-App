const API_KEY = process.env.REACT_APP_NEWS_API_KEY; // Use your NewsAPI.org key here

// Top Headlines using NewsAPI.org
export const fetchTopHeadlines = async (category = "general") => {
  // GNews API commented out
  // const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${API_KEY}`;

  // NewsAPI.org endpoint for top headlines by category and country=us
  const url = `https://newsapi.org/v2/top-headlines?category=${category}&country=us&pageSize=10&apiKey=${API_KEY}`;

  console.log("Fetching Top Headlines:", url);

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Top Headlines Response:", data);

    if (data.status !== "ok") {
      console.warn("API error or limit exceeded:", data.message || data.errors);
      return [];
    }

    return data.articles || [];
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    return [];
  }
};

// Search News using NewsAPI.org
export const fetchNewsBySearch = async (searchTerm = "") => {
  // GNews API commented out
  // const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(searchTerm)}&lang=en&country=us&max=10&apikey=${API_KEY}`;

  // NewsAPI.org everything endpoint to search news globally
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
    searchTerm
  )}&language=en&pageSize=10&sortBy=publishedAt&apiKey=${API_KEY}`;

  console.log("Fetching Search Results:", url);

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Search Response:", data);

    if (data.status !== "ok") {
      console.warn("API error or limit exceeded:", data.message || data.errors);
      return [];
    }

    return data.articles || [];
  } catch (error) {
    console.error("Error fetching search results:", error);
    return [];
  }
};
