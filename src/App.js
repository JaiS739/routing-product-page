import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./component/Products";
import Navbar from "./component/Navbar";
import ProductDetails from "./component/ProductDetails";
import { ProductProvider } from "./context/ProductsData";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="products/*" element={<Products />}>
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </ProductProvider>
    </div>
  );
}

export default App;
