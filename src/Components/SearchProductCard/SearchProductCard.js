import React from "react";
import "./searchProductCard.css";

const SearchProductCard = (props) => {
  return (
    <div className="search_product_card">
      <img src={props.img} alt="" srcset="" />
      <h3>{props.title}</h3>
    </div>
  );
};

export default SearchProductCard;
