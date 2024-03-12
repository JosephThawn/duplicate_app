import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Step,
  StepLabel,
  Stepper,
  Box,
} from "@mui/material";
import { useProducts } from "./ProductsContext";

// Define the steps
const steps = ["Step 1", "Step 2", "Step 3"];

function ModalWithSteps({ open, closeModal, product }) {
  const [activeStep, setActiveStep] = useState(0);
  const { addCopiedProduct } = useProducts(); // Get the addCopiedProduct function from context

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    closeModal(); // Use the passed closeModal function to close the modal
  };

  const handleSubmit = () => {
    console.log("Form submitted");
    addCopiedProduct(product); // Add the product to the copied products list
    handleReset(); // Reset and close after submission
  };

  return (
    <Dialog
      open={open}
      onClose={handleReset}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">A Copy Product</DialogTitle>
      <DialogContent>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <Box>
            <p>All steps completed - you're finished</p>
            <Button onClick={handleSubmit}>Submit</Button>
          </Box>
        ) : (
          <Box>
            <p>{`This is ${steps[activeStep]}`}</p>
            <Box>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleReset} color="secondary">
          Reset
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalWithSteps;
