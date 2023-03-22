import React from "react";
import "./ourBrands.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import arflu from "../../Assets/arflu_logo.png";
import anggerik from "../../Assets/anggerik_logo.png";
import honeywell from "../../Assets/honeywell_logo.png";
import tristar from "../../Assets/tristar_logo.png";
import appleton from "../../Assets/appleton.png";
import { Link } from "react-router-dom";

const OurBrands = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 0,
    arrows: false,
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
    <div className="our_brands">
      <h1>Our Brands</h1>
      <Slider {...settings} className="our_customer_slider">
        <div>
          <Link to="brands/products/arflu">
            <img
              id="arflu_component"
              src={arflu}
              className="bharat_img"
              alt="Bharat Petroleum"
              srcset=""
            />
          </Link>
        </div>
        <div>
          <Link to="/brands/products/anggerik_laksana">
            <img
              src={anggerik}
              className="indian_oil_img"
              alt="Indian Oil"
              id="anggerik_component"
              srcset=""
            />
          </Link>
        </div>
        <div>
          <Link to="/brands/products/honeywell">
            <img
              src={honeywell}
              className="ntpc_img"
              alt="NTPC"
              id="honeywell_component"
              srcset=""
            />
          </Link>
        </div>
        <div>
          <Link to="/brands/products/tristar">
            <img
              src={tristar}
              className="bhel_img"
              id="tristar_component"
              alt="Bharat Heavy Electicals Limited"
              srcset=""
            />
          </Link>
        </div>
        <div>
          <img
            src={appleton}
            id="appleton_component"
            className="ongc_img"
            alt="ONGC"
            srcset=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default OurBrands;
