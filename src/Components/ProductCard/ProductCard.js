import React from "react";
import { Link } from "react-router-dom";
import "./productsCard.css";

const ProductCard = (props) => {
  return (
    <Link to={props.prodUrl ? props.prodUrl : props.url}>
      <div className="products_card">
        <img src={props.img} alt="" srcset="" />
        <h3>{props.title.charAt(0).toUpperCase() + props.title.slice(1)}</h3>
      </div>
    </Link>
  );
};

export default ProductCard;
