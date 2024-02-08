import Template from "./template/Template";
import ProductDetail from "./products/detail/ProductDetail";
import Landing from "./landing/Landing";
import ProductList from "./products/ProductList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Template>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </Template>
  );
}

export default App;