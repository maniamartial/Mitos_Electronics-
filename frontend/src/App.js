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
import ViewCategories from "./pages/admin_pages/ViewCategories";
import CreateCategory from "./pages/admin_pages/CreateCategory";
import UpdateCategory from "./pages/admin_pages/UpdateCategory";
import ProductList from "./pages/admin_pages/ProductList";
import UpdateProduct from "./pages/admin_pages/UpdateProduct";
import CreateProduct from "./pages/admin_pages/CreateProduct";

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

          {/* Admin pages */}
          <Route path="/view_categories" element={<ViewCategories />} />
          <Route path="/create-category" element={<CreateCategory />} />
          <Route path="/update-category/:id" element={<UpdateCategory />} />
          <Route path="/view_products" element={<ProductList />} />
          <Route path="/update-product/:id" element={<UpdateProduct />} />
          <Route path="/create-product" element={<CreateProduct />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
