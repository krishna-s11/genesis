import React from "react";
import "./ourCustomers.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Bharat from "../../Assets/Bharat.png";
import IndianOil from "../../Assets/IndianOil.png";
import ntpc from "../../Assets/ntpc-logo.png";
import bhel from "../../Assets/bhel.svg";
import ongc from "../../Assets/ongc.png";
import Reliance from "../../Assets/reliance.png";

const OurCustomers = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 3,
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
    <div className="our_customers_pg">
      <h1>Our Customers</h1>
      <Slider {...settings} className="our_customer_slider">
        <div>
          <img
            src={Bharat}
            className="bharat_img"
            id="bharat_img"
            alt="Bharat Petroleum"
            srcset=""
          />
        </div>
        <div>
          <img
            src={IndianOil}
            className="indian_oil_img"
            alt="Indian Oil"
            srcset=""
          />
        </div>
        <div>
          <img src={ntpc} className="ntpc_img" alt="NTPC" srcset="" />
        </div>
        <div>
          <img
            src={bhel}
            className="bhel_img"
            alt="Bharat Heavy Electicals Limited"
            srcset=""
          />
        </div>
        <div>
          <img src={ongc} className="ongc_img" alt="ONGC" srcset="" />
        </div>
        <div id="reliance_container">
          <img
            src={Reliance}
            className="reliance_img"
            alt="Reliance Industries Limited"
            srcset=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default OurCustomers;
