import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./productDetail.css";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import ScrollALittle from "../../Utility/ScrollALittle";
import SameControl from "../../Assets/same_control.png";
import SimulationControl from "../../Assets/simulation_control.png";
import EquipmentModelling from "../../Assets/equipment_modelling.png";
import ExerciseGrading from "../../Assets/exercise_grading.png";

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
      <ScrollALittle />
      <div className="hero_about_pg">
        <div className="hero_overlay_about_pg">
          <h1>Genesis Energy</h1>
        </div>
      </div>
      <div className="content_about_pg">
        <h1>{product?.name}</h1>
        <div style={{ display: "flex" }} className="about_us_pg_container">
          <div className="content_about_pg_left">
            {product ? (
              product.details?.map((d) => {
                return <p>{d}</p>;
              })
            ) : (
              <p>Loading...</p>
            )}
            {/* {product ? (
              product.details?.map((d) => {
                return <p>{d}</p>;
              })
            ) : (
              <p>Loading..</p>
            )} */}
          </div>
          <div className="content_about_pg_right">
            <img src={product?.img} alt="" srcset="" />
          </div>
        </div>
        {id.id === "F4ghAtGDWfNcYaWu5u9E" ? (
          <div className="simulation_container">
            <img src={SameControl} alt="" srcset="" />
            <img src={SimulationControl} alt="" srcset="" />
            <img src={EquipmentModelling} alt="" srcset="" />
            <img src={ExerciseGrading} alt="" srcset="" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductDetail;
