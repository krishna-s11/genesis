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
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
