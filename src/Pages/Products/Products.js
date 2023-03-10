import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./products.css";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import ScrollALittle from "../../Utility/ScrollALittle";

const Products = () => {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    setCategories(
      querySnapshot.docs
        .map((doc) => ({ id: doc.id, data: doc.data() }))
        .sort((a, b) => a.data.prec - b.data.prec)
    );
  };

  useEffect(() => {
    fetchData();
    categories.sort((a, b) => a.data.prec - b.data.prec);
    console.log(categories);
  }, []);

  return (
    <div className="products_pg">
      {/* <ScrollALittle /> */}
      <div className="products_hero">
        <div className="hero_overlay_products_pg">
          <h1>Our Products</h1>
        </div>
      </div>
      <div className="products_content_container">
        <h1>Products</h1>
        <div className="products_card_container">
          {categories.length !== 0 ? (
            categories.map((d) => {
              return (
                <ProductCard
                  img={d.data.img}
                  title={d.data.name}
                  url={`${d.id}`}
                />
              );
            })
          ) : (
            <p>Loading... </p>
          )}
          {/* <ProductCard img={lighting} title="Lightings" /> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
