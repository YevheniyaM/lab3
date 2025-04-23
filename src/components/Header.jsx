import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container-header">
        <Link to="/" className="logo-text">
          My Travel
        </Link>
        <nav className="main-nav">
          <ul className="nav-items">
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link to="/publications">My Publications</Link>
            </li>
            <li>
              <Link to="#">Account</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
