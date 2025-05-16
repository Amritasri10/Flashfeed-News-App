const Navbar = ({
  onSearchChange,
  searchTerm,
  onSearchSubmit,
  onToggleDarkMode,
  isDarkMode,
}) => {
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isDarkMode ? "navbar-dark bg-grey" : "navbar-light bg-dark"
      }`}
    >
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo aligned left */}
        <a className="navbar-brand" href="/">
          <h3 className="mb-0 text-white">📰FlashFeed</h3>
        </a>

        {/* Search + buttons aligned right */}
        <form
          className="d-flex align-items-center"
          onSubmit={(e) => {
            e.preventDefault();
            onSearchSubmit();
          }}
          style={{ gap: "0.5rem" }}
        >
          <input
            className="form-control"
            type="search"
            placeholder="Search news..."
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{ minWidth: "200px" }}
          />
          <button
            type="submit"
            className={`btn ${
              isDarkMode ? "btn-primary" : "btn-warning"
            }`}
          >
            Search
          </button>

          <button
            type="button"
            className={`btn ${
              isDarkMode ? "btn-secondary" : "btn-outline-secondary"
            }`}
            onClick={onToggleDarkMode}
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <i className="bi bi-sun-fill"></i> // Sun icon
            ) : (
              <i className="bi bi-moon-fill"></i> // Moon icon
            )}
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
