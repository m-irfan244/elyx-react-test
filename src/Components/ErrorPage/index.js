import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ErrorImage from "src/Images/404car_image.png";
import ElyxButton from "../Common/ElyxButton.js/ElyxButton";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "center",
      }}
    >
      <Box sx={{ flexBasis: { md: "50%" } }}>
        <img src={ErrorImage} alt="Something went wrong" width="100%" />
      </Box>
      <Box paddingX={4}>
        <Typography variant="h1">Oops! Something went wrong...</Typography>
        <Typography variant="h4" marginY={3} sx={{ textTransform: "none" }}>
          We apologize for the inconvinience, we are currently working on the
          problem. Please refresh the page or try again later.
        </Typography>
        <ElyxButton onClick={() => navigate(0)}>Refresh page</ElyxButton>
      </Box>
    </Box>
  );
}
