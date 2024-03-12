// // Import the necessary components from MUI and your context
// import React, { useState } from "react";
// import { useProducts } from "./ProductsContext";
// import IconButton from "@mui/material/IconButton";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// import { Box } from "@mui/system";
// import ModalWithSteps from "./ModalWithSteps"; // Make sure this is the correct path to your component

// const Product = ({ product }) => {
//   // const { duplicateProduct } = useProducts();
//   const [openModal, setOpenModal] = useState(false); // State to control modal visibility

//   // const handleDuplicateAndOpenModal = (id) => {
//   //   duplicateProduct(id); // Duplicate the product
//   //   setOpenModal(true); // Open the modal
//   // };
//   // const handleModal = () => {
//   //   setOpenModal(true);
//   // };

//   return (
//     <>
//       <Box>
//         <p>{product.name}</p>
//         {/* <IconButton onClick={() => {handleDuplicateAndOpenModal(product.id)}}> */}
//         <IconButton onClick={setOpenModal(true)}>
//           <ContentCopyIcon />
//         </IconButton>
//       </Box>
//       {/* Conditionally render the ModalWithSteps component based on openModal state */}
//       <ModalWithSteps open={openModal} closeModal={() => setOpenModal(false)} />
//     </>
//   );
// };

// export default Product;

import React, { useState } from "react";
import { useProducts } from "./ProductsContext";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box } from "@mui/system";
import ModalWithSteps from "./ModalWithSteps"; // Ensure this path is correct

const Product = ({ product }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Box alignItems="center">
        <p padding="40px">{product.name}</p>
        <IconButton onClick={() => setOpenModal(true)}>
          <ContentCopyIcon />
        </IconButton>
      </Box>
      {/* Pass the openModal state and a function to control it to ModalWithSteps */}
      <ModalWithSteps
        open={openModal}
        closeModal={() => setOpenModal(false)}
        product={product}
      />
    </>
  );
};

export default Product;
