import React from "react";
import { useModal } from "@ebay/nice-modal-react";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

export default function CloseButton() {
  const modal = useModal();
  const handleClick = () => {
    modal.remove();
  };
  return (
    <Box textAlign="right">
      <CloseIcon sx={{ cursor: "pointer" }} onClick={handleClick} />
    </Box>
  );
}
