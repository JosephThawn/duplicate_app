// In a new or existing component, e.g., CopiedProductsList.js
import React from "react";
import { useProducts } from "./ProductsContext";
import { Box, Typography } from "@mui/material";

const CopiedProductsList = () => {
  const { copiedProducts } = useProducts();

  return (
    <Box>
      <Typography variant="h6">Copied Products</Typography>
      {copiedProducts.map((product, index) => (
        <Box key={index} padding={2} border={1} margin={1}>
          <Typography>This is a copied proeducts</Typography>
          <Typography>{product.name}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CopiedProductsList;
