// src/ProductsContext.js
import React, { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "PRDOCUT-101",
      description: "This is product 1",
      price: "$10.00",
    },
    // {
    //   id: 2,
    //   name: "Product 2",
    //   description: "This is product 2",
    //   price: "$20.00",
    // },
    // Add more products as needed
  ]);
  const [copiedProducts, setCopiedProducts] = useState([]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };
  const addCopiedProduct = (product) => {
    setCopiedProducts((prevCopiedProducts) => [...prevCopiedProducts, product]);
  };
  const duplicateProduct = (id) => {
    setProducts((prevProducts) => {
      const productToDuplicate = prevProducts.find(
        (product) => product.id === id
      );
      if (!productToDuplicate) return prevProducts;
      return [...prevProducts, { ...productToDuplicate, id: Date.now() }]; // Simple ID generation
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products, addProduct, duplicateProduct, duplicateProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
