// src/App.js
import React from "react";
import { ProductsProvider } from "./ProductsContext";
import ProductList from "./ProductList";
import CopiedProductsList from "./CopiedProductsList";

function App() {
  return (
    <ProductsProvider>
      <div>
        <h1>Product List</h1>
        <ProductList />
        {/* <CopiedProductsList /> */}
        <h1>copied Product list</h1>
      </div>
    </ProductsProvider>
  );
}

export default App;
