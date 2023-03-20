import React from "react";
import "./newProduct.css";

const NewProduct = () => {
  return (
    <div className="new_products">
      <h1>New Product</h1>
      <div className="new_products_form_container">
        <div className="row_container">
          <input type="text" name="name" id="name" />
          <input type="text" name="img" id="img" />
        </div>
        <div className="row_container">
          <input type="text" name="category" id="category" />
          <input type="text" name="brand" id="brand" />
        </div>
        <div className="column_container">
          <input type="text" name="detail1" id="detail1" />
          <input type="text" name="detail2" id="detail2" />
          <input type="text" name="detail3" id="detail3" />
          <input type="text" name="detail4" id="detail4" />
          <input type="text" name="detail5" id="detail5" />
          <input type="text" name="detail6" id="detail6" />
          <input type="text" name="detail7" id="detail7" />
          <input type="text" name="detail8" id="detail8" />
          <input type="text" name="detail9" id="detail9" />
          <input type="text" name="detail10" id="detail10" />
          <input type="text" name="detail11" id="detail11" />
          <input type="text" name="detail12" id="detail12" />
          <input type="text" name="detail13" id="detail13" />
          <input type="text" name="detail14" id="detail14" />
          <input type="text" name="detail15" id="detail15" />
          <input type="text" name="detail16" id="detail16" />
          <input type="text" name="detail17" id="detail17" />
          <input type="text" name="detail18" id="detail18" />
          <input type="text" name="detail19" id="detail19" />
          <input type="text" name="detail20" id="detail20" />
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
