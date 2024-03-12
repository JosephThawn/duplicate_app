// src/ProductList.js
import React from 'react';
import { useProducts } from './ProductsContext';
import Product from './Product';
import { Box } from '@mui/material';

const ProductList = () => {
  const { products } = useProducts();

  return (
    <Box 
    sx={{
      display: "flex",
      alignItems: "center",
      margin: "10px 0",
      padding: "10px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      borderRadius: "4px",
    }}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Box>
  );
};

export default ProductList;
