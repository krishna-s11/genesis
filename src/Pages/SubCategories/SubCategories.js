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

const SubCategories = () => {
  const category = useParams();
  const [categoryData, setCategoryData] = useState();
  const [subCategory, setSubCategory] = useState([]);
  const [products, setProducts] = useState();
  const [emFlag, setEmFlag] = useState(1);

  const fetchData = async () => {
    const cat_docRef = doc(db, "categories", category.category);
    const cat_docSnap = await getDoc(cat_docRef);
    setCategoryData(cat_docSnap.data());
    const sub_ref = collection(db, "sub_categories");
    const q = query(sub_ref, where("category", "==", category.category));
    const querySnapshot = await getDocs(q);
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
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="products_pg">
      <div className="products_hero">
        <div className="hero_overlay_products_pg">
          <h1>Our Products</h1>
        </div>
      </div>
      <div className="products_content_container">
        <h1>{categoryData?.name}</h1>
        <div className="products_card_container">
          {emFlag ? (
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
          ) : (
            products?.map((d) => {
              return (
                <ProductCard
                  img={d.data.img}
                  title={d.data.name}
                  url={`products/${category.category}`}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default SubCategories;
