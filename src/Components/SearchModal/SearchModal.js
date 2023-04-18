import React, { useEffect, useState } from "react";
import "./searchModal.css";
import SearchProductCard from "../SearchProductCard/SearchProductCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import closeImg from "../../Assets/close.png";
import Loader from "../Loader/Loader";

const SearchModal = ({ close }) => {
  const [products, setProducts] = useState([]);
  const [appleton, setAppleton] = useState([]);
  const [filter, setFilter] = useState("");
  const [finalProducts, setFinalProducts] = useState([]);
  const fetchData = async () => {
    // const querySnapshot = await getDocs(collection(db, "products"));
    // setProducts(
    //   querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
    // );
    // const appletonSnapshot = await getDocs(collection(db, "appleton"));
    // setAppleton(
    //   appletonSnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
    // );
    // setFinalProducts([...products, ...appleton]);
  };
  // const fetchAppleton = async () => {
  //   const querySnapshot = await getDocs(collection(db, "appleton"));
  //   setAppleton(
  //     querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
  //   );
  // };

  useEffect(() => {
    fetchData();
    // setFinalProducts([...products, ...appleton]);
  }, [products, appleton]);

  const filterData = finalProducts.filter(({ data }) => {
    return data.name.toLowerCase().includes(filter.toLowerCase());
  });

  const onSearch = (e) => {
    setFilter(e.target.value);
  };

  console.log(filterData);

  return (
    <div className="search_modal">
      <div className="search_modal_box">
        <div className="heading_container">
          <h1>Search Products</h1>
          <img
            src={closeImg}
            alt=""
            onClick={close}
            style={{
              width: "20px",
              position: "absolute",
              top: "50%",
              right: "30px",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
          />
        </div>
        {/* <div className="search_box_container"> */}
        <input
          type="text"
          name=""
          id="search_box"
          onChange={onSearch}
          placeholder="start typing to search the product..."
        />
        <div className="search_products">
          {filterData.length !== 0 ? (
            filterData.map((product, i) => {
              return (
                <SearchProductCard
                  title={product.data.name}
                  id={product.id}
                  img={product.data.img}
                  brand={product.data.brand}
                  key={i}
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

export default SearchModal;
