import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./productDetail.css";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

const ProductDetail = () => {
  const id = useParams();
  const [product, setProduct] = useState([]);
  const fetchData = async () => {
    const docRef = doc(db, "products", id.id);
    const docSnap = await getDoc(docRef);
    setProduct(docSnap.data());
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(product);
  return (
    <div className="product_detail_pg">
      <div className="hero_about_pg">
        <div className="hero_overlay_about_pg">
          <h1>Genesis Energy</h1>
        </div>
      </div>
      <div className="content_about_pg">
        <h1>{product?.name}</h1>
        <div style={{ display: "flex" }}>
          <div className="content_about_pg_left">
            {product?.details?.map((d) => {
              return <p>{d}</p>;
            })}
          </div>
          <div className="content_about_pg_right">
            <img src={product?.img} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
