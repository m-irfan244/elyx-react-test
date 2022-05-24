import React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const CustomButton = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== "reverse" &&
    prop !== "clean" &&
    prop !== "height" &&
    prop !== "width" &&
    prop !== "maxWidth",
})(({ theme, reverse, clean, height, width, maxWidth, minWidth }) => ({
  // display: "inline-block",
  backgroundColor: reverse || clean ? "white" : theme.palette.primary.main,
  color: reverse ? theme.palette.primary.main : clean ? "black" : "white",
  fontSize: "1rem",
  maxWidth: maxWidth || undefined,
  height: height || undefined,
  width: width || undefined,
  minWidth: minWidth || undefined,
  border: reverse
    ? `1px solid ${theme.palette.primary.main}`
    : clean
    ? "none"
    : undefined,
  "&:hover": {
    backgroundColor: reverse
      ? theme.palette.primary.main
      : clean
      ? "white"
      : undefined,
    color: reverse ? "white" : clean ? "black" : undefined,
  },
}));

export default function ElyxButton(props) {
  const { children, reverse, onClick } = props;
  return (
    <CustomButton reverse={reverse} onClick={onClick} {...props}>
      {children}
    </CustomButton>
  );
}
