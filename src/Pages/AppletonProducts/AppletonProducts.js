import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./appletonProducts.css";
import { db } from "../../firebase";
import {
  getDocs,
  getDoc,
  doc,
  where,
  collection,
  query,
} from "firebase/firestore";
import ProductCard from "../../Components/ProductCard/ProductCard";
import ScrollALittle from "../../Utility/ScrollALittle";
import Loader from "../../Components/Loader/Loader";

const AppletonProducts = () => {
  const [subCategory, setSubCategory] = useState();

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "appleton_sub"));
    setSubCategory(
      querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(subCategory);
  return (
    <div className="products_pg">
      <ScrollALittle />
      <div className="products_hero">
        <div className="hero_overlay_products_pg">
          <h1>Our Products</h1>
        </div>
      </div>
      <div className="products_content_container">
        <h1>Appleton</h1>
        <div className="products_card_container"></div>
      </div>
    </div>
  );
};

export default AppletonProducts;
