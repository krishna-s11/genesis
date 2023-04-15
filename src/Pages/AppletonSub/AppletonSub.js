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

const AppletonSub = () => {
  const [products, setProducts] = useState();
  const sub = useParams().sub;

  console.log(sub);

  const fetchData = async () => {
    const ref = collection(db, "appleton");
    const q = query(ref, where("sub_category", "==", sub));
    const catSnapshot = await getDocs(q);
    setProducts(
      catSnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(products);
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
          {sub !== "38ih1tZEW87usJkYMdRi" ? (
            products?.length > 0 ? (
              products.map((d) => {
                return (
                  <ProductCard
                    img={d.data.img}
                    title={d.data.name}
                    prodUrl={`/product/${d.id}/appleton`}
                  />
                );
              })
            ) : (
              <Loader />
            )
          ) : (
            <h3>Coming Soon...</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppletonSub;
