import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import PlaceOrder from "./pages/PlaceOrder";
import ProductsByCategory from "./pages/ProductByCategory";
import SingleProduct from "./pages/SingleProduct";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/order-items" element={<PlaceOrder />} />
          <Route
            path="/product-by-category/:categoryId"
            element={<ProductsByCategory />}
          />
          <Route
            path="/single-product/:productId"
            element={<SingleProduct />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
