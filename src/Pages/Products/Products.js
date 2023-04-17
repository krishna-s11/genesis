import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./products.css";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import ScrollALittle from "../../Utility/ScrollALittle";
import SearchModal from "../../Components/SearchModal/SearchModal";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [appleton, setAppletonCategories] = useState([]);
  const [display, setDisplay] = useState(false);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    setCategories(
      querySnapshot.docs
        .map((doc) => ({ id: doc.id, data: doc.data() }))
        .sort((a, b) => a.data.prec - b.data.prec)
    );
    const appletonSnapshot = await getDocs(
      collection(db, "appleton_categories")
    );
    setAppletonCategories(
      appletonSnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
    );
  };

  useEffect(() => {
    fetchData();
    categories.sort((a, b) => a.data.prec - b.data.prec);
  }, []);

  return (
    <div className="products_pg">
      {/* <ScrollALittle /> */}
      {display ? (
        <SearchModal
          close={() => {
            setDisplay(false);
          }}
        />
      ) : null}
      <div className="products_hero">
        <div className="hero_overlay_products_pg">
          <h1>Our Products</h1>
        </div>
      </div>
      <div className="products_content_container">
        <div style={{ position: "relative" }}>
          <h1>Products</h1>
          <button
            className="btn_search"
            onClick={() => {
              setDisplay(true);
            }}
          >
            Search
          </button>
        </div>
        <div className="products_card_container">
          {categories.length !== 0 ? (
            categories.map((d) => {
              return (
                <ProductCard
                  img={d.data.img}
                  title={d.data.name}
                  url={`${d.id}/undefined`}
                />
              );
            })
          ) : (
            <p>Loading... </p>
          )}
          {appleton?.map((d) => {
            return (
              <ProductCard
                img={d.data.img}
                title={d.data.name}
                url={`/brands/products/appleton/${d.id}`}
              />
            );
          })}
          {/* <ProductCard img={lighting} title="Lightings" /> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
