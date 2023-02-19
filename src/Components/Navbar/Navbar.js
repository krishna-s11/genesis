import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  //   document.onscroll(function () {
  //     var nav = document.getElementsByClassName("navbar");
  //     console.log(nav);
  //   });
  window.scroll(function () {
    var nav = document.getElementsByClassName("navbar");
    console.log(nav);
  });

  return (
    <div className="navbar">
      <div style={{ fontWeight: "700" }}>GENESIS ENERGY</div>
      <ul className="nav_list">
        <Link to="/">
          <li className="nav_items">Home</li>
        </Link>
        <Link to="/about_us">
          <li className="nav_items">About us</li>
        </Link>
        <li className="nav_items">Products</li>
        <Link to="/news">
          <li className="nav_items">News & Media</li>
        </Link>
        <li className="nav_items">Projects</li>
        <li className="nav_items">Get in touch</li>
      </ul>
    </div>
  );
};

export default Navbar;
