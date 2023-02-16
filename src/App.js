import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ width: "100%", marginTop: "120px" }}>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
