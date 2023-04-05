import React from "react";
import "./searchProductCard.css";
import { useNavigate } from "react-router";

const SearchProductCard = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="search_product_card"
      onClick={() => {
        props.brand === "appleton"
          ? navigate(`/product/${props.id}/appleton`)
          : navigate(`/product/${props.id}/undefined`);
      }}
    >
      <img src={props.img} alt="" srcset="" />
      <h3>{props.title}</h3>
    </div>
  );
};

export default SearchProductCard;
