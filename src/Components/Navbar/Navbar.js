import React, { useEffect, useState } from "react";
import { Link, Router, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import logo from "../../Assets/logo.png";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navigate = useNavigate();
  window.scroll(function () {
    var nav = document.getElementsByClassName("navbar");
    console.log(nav);
  });

  const resetWidth = () => {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (width <= 1000) {
      document.getElementById("nav_list").style.width = "0px";
    }
  };

  return (
    <div className="navbar">
      <div style={{ fontWeight: "700", color: "#f1d358" }}>
        {"              "}
      </div>
      <img
        src={logo}
        className="logo_img"
        alt=""
        srcset=""
        onClick={() => {
          navigate("/");
        }}
      />
      <GiHamburgerMenu
        id="ham"
        onClick={() => {
          document.getElementById("nav_list").style.width = "300px";
        }}
      />
      <ul className="nav_list" id="nav_list">
        <GrClose
          id="close_btn"
          onClick={() => {
            document.getElementById("nav_list").style.width = "0px";
          }}
        />
        <Link
          to="/"
          onClick={() => {
            resetWidth();
          }}
        >
          <li className="nav_items">Home</li>
        </Link>
        <Link to="/about_us" onClick={resetWidth}>
          <li className="nav_items">About us</li>
        </Link>
        <Link to="/products" onClick={resetWidth} id="product">
          <li className="nav_items">Products</li>
          <div className="dropdown">
            <ul>
              <Link to="/products/qxLDeuq6UtomdtONMLoh">
                <li>Simulation Systems</li>
              </Link>
              <Link to="/products/ZzKJEJYZEaQ7WgmOJ52l">
                <li>Callidus Flares</li>
              </Link>
              <Link to="/products/Iy3K2lop1tHLqoJtz9Aw">
                <li>Callidus Burners</li>
              </Link>
              <Link to="/products/BARAsRq0ujfXOEeJZYiJ">
                <li>Control Offering</li>
              </Link>
              <Link to="/products/8HGTW5FQ8Fow1NMuIjwo">
                <li>Reels and Switches</li>
              </Link>
              <Link to="/products/C31QOWflUvTtbO73tOGj">
                <li>Bolting Solutions</li>
              </Link>
              <Link to="/products">
                <li>More...</li>
              </Link>
            </ul>
          </div>
        </Link>
        <Link to="/our_brands" onClick={resetWidth}>
          <li className="nav_items" id="brands">
            Our Brands
            <div className="dropdown" id="brand_dropdown">
              <ul>
                <Link to="/brands/products/arflu">
                  <li>Arflu</li>
                </Link>
                <Link to="/brands/products/anggerik_laksana">
                  <li>Anggerik Laksana</li>
                </Link>
                <Link to="/brands/products/honeywell">
                  <li>Honeywell</li>
                </Link>
                <Link to="/brands/products/tristar">
                  <li>Tri-Star Industries</li>
                </Link>
                <Link to="/brands/products/appleton">
                  <li>Appleton Emerson</li>
                </Link>
                <Link to="/our_brands">
                  <li>View all...</li>
                </Link>
              </ul>
            </div>
          </li>
        </Link>
        <Link to="/news" onClick={resetWidth}>
          <li className="nav_items">News & Blogs</li>
        </Link>
        <Link to="/projects" onClick={resetWidth}>
          <li className="nav_items">Projects</li>
        </Link>
        <Link to="/services" onClick={resetWidth}>
          <li className="nav_items">Services</li>
        </Link>
        <Link to="/contact_us" onClick={resetWidth}>
          <li className="nav_items">Get in touch</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
