import { styled } from "@mui/system";
import { Grid, Box, Button } from "@mui/material";

export const CustomGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  backgroundColor: "#353535",
  color: "white",
  fontFamily: "Poppins",
  fontSize: "14px",
  borderRadius: "4px",
  marginBottom: "1rem",

  lineHeight: "20px",
  [theme.breakpoints.down("md")]: {
    display: "block",
    lineHeight: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));

export const Item = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isButton",
})(({ theme, isButton }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: isButton ? 0 : "1rem 0.5rem",
}));
export const CustomSpan = styled("span")(({ theme }) => ({
  color: "#5E97FF",
  marginRight: "5px",
}));

export const BidButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "100%",
  height: "100%",
  color: "white",
  fontSize: "16px",
  fontWeight: 600,
  // padding: "0.2rem 1rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "14",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));
