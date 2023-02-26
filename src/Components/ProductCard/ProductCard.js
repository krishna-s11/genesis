import React from "react";
import { Link } from "react-router-dom";
import "./productsCard.css";

const ProductCard = (props) => {
  console.log(props);
  return (
    <Link to={props.url}>
      <div className="products_card">
        <img src={props.img} alt="" srcset="" />
        <h3>{props.title}</h3>
      </div>
    </Link>
  );
};

export default ProductCard;
