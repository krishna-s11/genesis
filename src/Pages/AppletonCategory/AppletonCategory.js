import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./appletonSub.css";
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

const AppletonCategory = () => {
  const [subCategory, setSubCategory] = useState();
  const category = useParams().cat;

  const fetchData = async () => {
    const ref = collection(db, "appleton_sub");
    const q = query(ref, where("category", "==", category));
    const catSnapshot = await getDocs(q);
    setSubCategory(
      catSnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
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
        <div className="products_card_container">
          {subCategory?.length > 0 ? (
            subCategory.map((d) => {
              return (
                <ProductCard
                  img={d.data.img}
                  title={d.data.name}
                  prodUrl={`${d.id}`}
                />
              );
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default AppletonCategory;
