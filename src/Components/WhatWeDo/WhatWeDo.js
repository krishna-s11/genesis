import React from "react";
import "./whatWeDo.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import manufacturer from "../../Assets/manufacturer.jpg";
import shipment from "../../Assets/shipment.jpg";
import sales from "../../Assets/sales.jpeg";
import strategic from "../../Assets/strategic.jpeg";
import epc from "../../Assets/epc.jpg";
import aftersales from "../../Assets/aftersales.jpeg";

const WhatWeDo = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="what_we_do_pg">
      <h1>Our Expertise</h1>
      <Slider {...settings} className="what_we_do_carousel">
        <div className="what_we_do_carousel_container">
          <img
            className="what_we_do_carousel_img"
            src={manufacturer}
            alt="genesis manfacturer"
            srcset=""
          />
          <h3>Manufacturer</h3>
        </div>
        <div className="what_we_do_carousel_container">
          <img
            className="what_we_do_carousel_img"
            src={shipment}
            alt="genesis authorized dealer"
            srcset=""
          />
          <h3>Authorized Distributor</h3>
        </div>
        <div className="what_we_do_carousel_container">
          <img
            className="what_we_do_carousel_img"
            src={sales}
            alt="genesis sales representative"
            srcset=""
          />
          <h3>Sales Representative</h3>
        </div>
        <div className="what_we_do_carousel_container">
          <img
            className="what_we_do_carousel_img"
            src={strategic}
            alt="genesis strategic partner"
            srcset=""
          />
          <h3>Strategic Partner</h3>
        </div>
        <div className="what_we_do_carousel_container">
          <img
            className="what_we_do_carousel_img"
            src={epc}
            alt="genesis epc projects"
            srcset=""
          />
          <h3>EPC Projects</h3>
        </div>
        <div className="what_we_do_carousel_container">
          <img
            className="what_we_do_carousel_img"
            src={aftersales}
            alt="genesis after sales service"
            srcset=""
          />
          <h3>After Sales Service</h3>
        </div>
      </Slider>
    </div>
  );
};

export default WhatWeDo;
