import React from "react";
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
        <li className="nav_items">Home</li>
        <li className="nav_items">About us</li>
        <li className="nav_items">Products</li>
        <li className="nav_items">What we do</li>
        <li className="nav_items">News & Media</li>
        <li className="nav_items">Projects</li>
        <li className="nav_items">Get in touch</li>
      </ul>
    </div>
  );
};

export default Navbar;
