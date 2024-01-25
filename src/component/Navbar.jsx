import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../public/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
          <Link className="link" to="?cat=science">
            <h6>Science</h6>
          </Link>
          <Link className="link" to="?cat=programming">
            <h6>Programming</h6>
          </Link>
          <Link className="link" to="?cat=games">
            <h6>Games</h6>
          </Link>
          <Link className="link" to="?cat=music">
            <h6>Music</h6>
          </Link>
          <Link className="link" to="?cat=sport">
            <h6>Sport</h6>
          </Link>
          <Link className="link" to="?cat=politics&phylosophy">
            <h6>Philosophy & Politics</h6>
          </Link>
          <span>John</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
