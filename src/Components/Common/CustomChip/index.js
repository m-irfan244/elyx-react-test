import React from "react";
import { useTheme } from "@mui/material";
import { Chip } from "@mui/material";

export default function CustomChip({ label, bgColor }) {
  const theme = useTheme();
  const chipStyles = {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 600,
    backgroundColor: bgColor,
    color: "white",
    borderRadius: "0.25rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  };

  return <Chip label={label} sx={chipStyles} />;
}
