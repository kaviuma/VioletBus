import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container "  >
        <Link className="navbar-brand fw-bold " to="/"> Violet Bus</Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

       <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/"> Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup"> Signup </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/help"> Help </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about"> About</Link>
            </li>
              <li className="nav-item">
              <Link className="nav-link" to="/terms">Terms</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/viewbooking"> My Bookings</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}