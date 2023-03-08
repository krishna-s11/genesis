import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../Assets/logo.png";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  window.scroll(function () {
    var nav = document.getElementsByClassName("navbar");
    console.log(nav);
  });

  const [disp, setDisp] = useState(0);

  return (
    <div className="navbar">
      <div style={{ fontWeight: "700", color: "#f6d337" }}>GENESIS ENERGY</div>
      <img src={logo} className="logo_img" alt="" srcset="" />
      <GiHamburgerMenu
        id="ham"
        onClick={() => {
          setDisp(1);
        }}
      />
      <ul
        className="nav_list"
        style={disp ? { display: "flex" } : { display: "none" }}
      >
        <GrClose
          id="close_btn"
          onClick={() => {
            setDisp(0);
          }}
        />
        <Link to="/">
          <li className="nav_items">Home</li>
        </Link>
        <Link to="/about_us">
          <li className="nav_items">About us</li>
        </Link>
        <Link to="/products">
          <li className="nav_items">Products</li>
        </Link>
        <Link to="/our_brands">
          <li className="nav_items">Our Brands</li>
        </Link>
        <Link to="/news">
          <li className="nav_items">News & Media</li>
        </Link>
        <Link to="/projects">
          <li className="nav_items">Projects</li>
        </Link>
        <Link to="/services">
          <li className="nav_items">Services</li>
        </Link>
        <Link to="/contact_us">
          <li className="nav_items">Get in touch</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
