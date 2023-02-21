import React from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./products.css";
import lighting from "../../Assets/lightings.jpeg";

const Products = () => {
  return (
    <div className="products_pg">
      <div className="products_hero">
        <div className="hero_overlay_products_pg">
          <h1>Our Products</h1>
        </div>
      </div>
      <div className="products_content_container">
        <h1>Products</h1>
        <div className="products_card_container">
          <ProductCard img={lighting} title="Lightings" />
        </div>
      </div>
    </div>
  );
};

export default Products;
