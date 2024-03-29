import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./subCategories.css";
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
import SearchModal from "../../Components/SearchModal/SearchModal";

const SubCategories = () => {
  const category = useParams();
  const brand = useParams();
  const [categoryData, setCategoryData] = useState();
  const [subCategory, setSubCategory] = useState([]);
  const [products, setProducts] = useState();
  const [emFlag, setEmFlag] = useState(1);
  const [display, setDisplay] = useState(false);
  console.log(brand.brand);
  const fetchData = async () => {
    const cat_docRef = doc(db, "categories", category.category);
    const cat_docSnap = await getDoc(cat_docRef);
    setCategoryData(cat_docSnap.data());
    const sub_ref = collection(db, "sub_categories");
    const q = query(sub_ref, where("category", "==", category.category));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot.docs);
    if (brand.brand === "appleton") {
      if (querySnapshot.empty) {
        setEmFlag(0);
        const prodRef = collection(db, "appleton");
        const q = query(prodRef, where("category", "==", category.category));
        const querySnapshot = await getDocs(q);
        setProducts(
          querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      } else {
        setSubCategory(
          querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      }
    } else {
      if (querySnapshot.empty) {
        setEmFlag(0);
        const prodRef = collection(db, "products");
        const q = query(prodRef, where("category", "==", category.category));
        const querySnapshot = await getDocs(q);
        setProducts(
          querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      } else {
        setSubCategory(
          querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="products_pg">
      {display ? (
        <SearchModal
          close={() => {
            setDisplay(false);
          }}
        />
      ) : null}
      <ScrollALittle />
      <div className="products_hero">
        <div className="hero_overlay_products_pg">
          <h1>Our Products</h1>
        </div>
      </div>
      <div className="products_content_container">
        <div style={{ position: "relative" }}>
          <h1>
            {categoryData
              ? categoryData?.name.charAt(0).toUpperCase() +
                categoryData?.name.slice(1)
              : null}
          </h1>
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
          {/* {emFlag ? (
            subCategory ? (
              subCategory.map((d) => {
                return (
                  <ProductCard
                    img={d.data.img}
                    title={d.data.name}
                    url={`/products/${category.category}/${d.id}`}
                  />
                );
              })
            ) : (
              <p>Loading</p>
            )
          ) : ( */}
          {products ? (
            products.map((d) => {
              return (
                <ProductCard
                  img={d.data.img}
                  title={d.data.name}
                  // url={`product/${d.id}`}
                  prodUrl={
                    window.location.href.includes("appleton")
                      ? `/product/${d.id}/appleton`
                      : `/product/${d.id}/${d.brand}`
                  }
                />
              );
            })
          ) : (
            <p>Loading...</p>
          )}
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default SubCategories;
