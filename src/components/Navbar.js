import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div class="mid">
      <ul class="navbar">
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
  );
};

export default Navbar;
