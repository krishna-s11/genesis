import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./products.css";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const Products = () => {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    setCategories(
      querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(categories);

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
          {categories ? (
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
            <p>Loading</p>
          )}
          {/* <ProductCard img={lighting} title="Lightings" /> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
