import React from "react";
import "./productsCard.css";

const ProductCard = (props) => {
  return (
    <div className="products_card">
      <img src={props.img} alt="" srcset="" />
      <h3>LIGHTINGS</h3>
    </div>
  );
};

export default ProductCard;
