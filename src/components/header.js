import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          {/* Logo aligned to the left */}


          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Company Logo" className="logo" />
          </Link>


          {/* Navbar toggler for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Centered navigation links */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  What We Do
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  Who We Are
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/insight" className="nav-link">
                  Insights
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
