import React, { useEffect } from "react";

const Footer = ({ isDarkMode }) => {
  useEffect(() => {
    // Sticky footer setup
    document.body.style.margin = "0";
    document.body.style.minHeight = "100vh";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";

    const root = document.getElementById("root");
    if (root) {
      root.style.flex = "1";
      root.style.display = "flex";
      root.style.flexDirection = "column";
    }
  }, []);

  const footerStyle = {
    marginTop: "auto",
    padding: "1.2rem 0",
    backgroundColor: isDarkMode ? "#000" : "#000", // dark and light backgrounds
    color: isDarkMode ? "#f8f9fa" : "#f8f9fa",            // text color per mode
    textAlign: "center",
    borderTop: `1px solid ${isDarkMode ? "#444" : "#ccc"}`,
    fontSize: "0.9rem",
    width: "100%",
  };

  return (
    <footer style={footerStyle}>
      <p style={{ margin: "0 0 4px 0" }}>
        &copy; {new Date().getFullYear()} FlashFeed. All rights reserved.
      </p>
      <p style={{ margin: 0 }}>Built with ❤️ for news lovers worldwide.</p>
    </footer>
  );
};

export default Footer;
