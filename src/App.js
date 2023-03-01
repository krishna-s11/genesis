import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import NewsMedia from "./Pages/NewsMedia/NewsMedia";
import Products from "./Pages/Products/Products";
import Projects from "./Pages/Projects/Projects";
import Services from "./Pages/Services/Services";
import GetInTouch from "./Pages/GetInTouch/GetInTouch";
import SubCategories from "./Pages/SubCategories/SubCategories";
import Product from "./Pages/Product/Product";
import OurBrands from "./Components/OurBrands/OurBrands";
import OurBrandsPG from "./Pages/OurBrands/OurBrands";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ width: "100%", marginTop: "120px" }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about_us" element={<About />} />
          <Route path="/news" element={<NewsMedia />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<SubCategories />} />
          {/* <Route
            path="/products/:category/:sub_category"
            element={<Product />}
          /> */}
          <Route path="brands/products/:brand" element={<Product />} />
          <Route path="/our_brands" element={<OurBrandsPG />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact_us" element={<GetInTouch />} />
        </Routes>
      </div>
      {document.location.pathname.includes("contact_us") ? null : <Footer />}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
