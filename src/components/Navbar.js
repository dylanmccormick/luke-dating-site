import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div class="mid">
      <div class="list">
        <ul class="navbar topLeftBorders">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bio">Bio</Link>
          </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/apply">Apply</Link>
          </li>
        </ul>
      </div>
      <div class="luke-icon">
        <img
          class="luke-icon-image"
          src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg"
          alt="our beautiful boy"
        />
      </div>
    </div>
  );
};

export default Navbar;
