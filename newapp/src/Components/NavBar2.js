import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure JS for Bootstrap is loaded

function NavBar2() {
  const location = useLocation(); // Get current URL for making it highlight
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => setIsToggled(!isToggled);

  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm">
      <div className="container-fluid">
        {/* Branding */}
        <Link className="navbar-brand fw-bold text-primary" to="/">
          TOP NEWS
        </Link>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle} // Handle toggling manually
          aria-controls="navbarNav"
          aria-expanded={isToggled}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar */}
        <div
          className={`collapse navbar-collapse ${isToggled ? "show" : ""}`} // Dynamically add 'show' class
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active text-primary fw-bold" : "text-secondary"
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/Entertainment" ? "active text-primary fw-bold" : "text-secondary"
                }`}
                to="/Entertainment"
              >
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/Technology" ? "active text-primary fw-bold" : "text-secondary"
                }`}
                to="/Technology"
              >
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/Sports" ? "active text-primary fw-bold" : "text-secondary"
                }`}
                to="/Sports"
              >
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/Business" ? "active text-primary fw-bold" : "text-secondary"
                }`}
                to="/Business"
              >
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/Health" ? "active text-primary fw-bold" : "text-secondary"
                }`}
                to="/Health"
              >
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/Science" ? "active text-primary fw-bold" : "text-secondary"
                }`}
                to="/Science"
              >
                Science
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar2;