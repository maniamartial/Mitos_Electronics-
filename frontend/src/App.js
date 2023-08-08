import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import PlaceOrder from "./pages/PlaceOrder";
import ProductsByCategory from "./pages/ProductByCategory";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/order-items" element={<PlaceOrder />} />
        <Route
          path="/product-by-category/:categoryId"
          element={<ProductsByCategory />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
