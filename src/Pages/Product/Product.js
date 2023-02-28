import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./product.css";
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

const Product = () => {
  const param = useParams();
  const sub_id = param.sub_category;
  const cat_id = param.category;
  const [subCategory, setSubCategory] = useState();
  const [products, setProducts] = useState();
  const brand = param.brand;
  const [heading, setHeading] = useState("");

  console.log(brand);

  const fetchData = async () => {
    if (brand) {
      const docRef = collection(db, "products");
      const q = query(docRef, where("brand", "==", brand));
      const querySnapshot = await getDocs(q);
      setProducts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    } else {
      const docRef = doc(db, "sub_categories", sub_id);
      const docSnap = await getDoc(docRef);
      setSubCategory(docSnap.data());
      const prodRef = collection(db, "products");
      const q = query(prodRef, where("sub_category", "==", sub_id));
      const querySnapshot = await getDocs(q);
      setProducts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    }
    // setProducts(
    //   querySnapshot.docs.map((d) => ({ id: doc.id, data: doc.data() }))
    // );
  };
  useEffect(() => {
    fetchData();
    if (brand) {
      if (brand.includes("_")) {
        // brand.replace("_", " ");
        let word = brand.split("_");

        let heading =
          word[0].charAt(0).toUpperCase() +
          word[0].slice(1) +
          " " +
          word[1].charAt(0).toUpperCase() +
          word[1].slice(1);
        setHeading(heading);
      } else {
        let heading = brand.charAt(0).toUpperCase() + brand.slice(1);
        setHeading(heading);
      }
    } else {
      setHeading(subCategory?.name);
    }
  }, [brand, subCategory]);

  console.log(products);
  return (
    <div className="products_pg">
      <div className="products_hero">
        <div className="hero_overlay_products_pg">
          <h1>Our Products</h1>
        </div>
      </div>
      <div className="products_content_container">
        <h1>{heading}</h1>
        <div className="products_card_container">
          {products ? (
            products.map((d) => {
              return (
                <ProductCard
                  img={d.data.img}
                  title={d.data.name}
                  url={`products/${cat_id}/${sub_id}}`}
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

export default Product;
