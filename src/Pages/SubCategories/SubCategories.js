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
    console.log(querySnapshot.docs);
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
      <ScrollALittle />
      <div className="products_hero">
        <div className="hero_overlay_products_pg">
          <h1>Our Products</h1>
        </div>
      </div>
      <div className="products_content_container">
        <h1>
          {categoryData?.name.charAt(0).toUpperCase() +
            categoryData?.name.slice(1)}
        </h1>
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
          {category.category === "2pszbbhbOMa9KVoFvJvk" ||
          category.category === "8HGTW5FQ8Fow1NMuIjwo" ||
          category.category === "8HKHxYiM1SHxwdBIfohh" ||
          category.category === "DhWxO2uN7Nx06Jf9DiSL" ||
          category.category === "Gp9OOGZBMYAZGqwVHFL0" ||
          category.category === "OdPw6ZNB7p2Sl2aLLtFm" ||
          category.category === "q4kS6pFeVJ9eq9Us8Rme" ||
          category.category === "sjrmk4Vz6gwoewPnlOVn" ||
          category.category === "vJuY2CW7En0lv1AKnm7L" ? (
            <h3>Coming Soon !</h3>
          ) : products ? (
            products.map((d) => {
              return (
                <ProductCard
                  img={d.data.img}
                  title={d.data.name}
                  // url={`product/${d.id}`}
                  prodUrl={`/product/${d.id}`}
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
