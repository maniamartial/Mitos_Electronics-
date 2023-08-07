import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    stock: 10,
    image: "product1.jpg",
  },
  // ... other product data ...
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
