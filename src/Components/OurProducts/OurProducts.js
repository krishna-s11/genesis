import React, { useEffect, useState } from "react";
import "./ourProducts.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import cable from "../../Assets/cable.jpeg";
import heat_tracer from "../../Assets/heat_tracer.jpeg";
import pipe_fittings from "../../Assets/pipe_fittings.jpeg";
import oil_gas from "../../Assets/oil_gas.png";
import cathodic_protection from "../../Assets/cathodic_protection.jpeg";
import junction from "../../Assets/junction.jpeg";
import pattern from "../../Assets/backPattern.svg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import ScrollALittle from "../../Utility/ScrollALittle";

const OurProducts = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
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

  const [products, setProducts] = useState([]);

  const fetch = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    querySnapshot.forEach((doc) => {
      setProducts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  };

  useEffect(() => {
    fetch();
  }, []);

  console.log(products);

  return (
    <div className="our_products_home">
      {/* <img src={pattern} alt="" srcset="" id="our_product_background" /> */}
      <h1>Our Products</h1>
      <Slider {...settings} className="what_we_do_carousel">
        {products.map((product) => {
          return (
            <div
              className="what_we_do_carousel_container"
              id="our_product_carousel"
            >
              <img
                className="what_we_do_carousel_img"
                src={product.data.img}
                alt="genesis manfacturer"
                srcset=""
              />
              <Link to={`/products/${product.id}`}>
                <h3>{product.data.name}</h3>
              </Link>
            </div>
          );
        })}
        {/* <div className="what_we_do_carousel_container">
          <img
            className="what_we_do_carousel_img"
            src={heat_tracer}
            alt="genesis authorized dealer"
            srcset=""
          />
          <h3>Sealants, Heat Tracers</h3>
        </div>
        <div className="what_we_do_carousel_container">
          <img
            className="what_we_do_carousel_img"
            src={pipe_fittings}
            alt="genesis sales representative"
            srcset=""
          />
          <h3>Pipe Fittings and Flanges</h3>
        </div>
        <div className="what_we_do_carousel_container">
          <img
            className="what_we_do_carousel_img"
            src={oil_gas}
            alt="genesis strategic partner"
            srcset=""
          />
          <h3>Oil and Gas Automation</h3>
        </div>
        <div className="what_we_do_carousel_container">
          <img
            className="what_we_do_carousel_img"
            src={cathodic_protection}
            alt="genesis epc projects"
            srcset=""
          />
          <h3>Cathodic Protection System</h3>
        </div>
        <div className="what_we_do_carousel_container">
          <img
            className="what_we_do_carousel_img"
            src={junction}
            alt="genesis after sales service"
            srcset=""
          />
          <h3>Junction Boxes and Enclosures</h3>
        </div> */}
      </Slider>
    </div>
  );
};

export default OurProducts;
