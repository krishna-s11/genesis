import React from "react";
import "./ourBrands.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import arflu from "../../Assets/arflu_logo.png";
import anggerik from "../../Assets/anggerik_logo.png";
import honeywell from "../../Assets/honeywell_logo.png";
import tristar from "../../Assets/tristar_logo.png";
import appleton from "../../Assets/appleton_logo.png";

const OurBrands = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
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
          <img
            id="arflu"
            src={arflu}
            className="bharat_img"
            alt="Bharat Petroleum"
            srcset=""
          />
        </div>
        <div>
          <img
            src={anggerik}
            className="indian_oil_img"
            alt="Indian Oil"
            srcset=""
          />
        </div>
        <div>
          <img
            src={honeywell}
            className="ntpc_img"
            alt="NTPC"
            id="honeywell"
            srcset=""
          />
        </div>
        <div>
          <img
            src={tristar}
            className="bhel_img"
            id="tristar"
            alt="Bharat Heavy Electicals Limited"
            srcset=""
          />
        </div>
        <div>
          <img src={appleton} className="ongc_img" alt="ONGC" srcset="" />
        </div>
      </Slider>
    </div>
  );
};

export default OurBrands;
