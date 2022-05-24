import styled from "@mui/system/styled";
import { Grid, Button } from "@mui/material";

export const CustomWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  margin: "1rem 0",
  fontFamily: "Poppins",
  fontSize: "18px",
  fontWeight: 600,
  border: "1px solid #CCD9E0",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
  "& img": {
    objectFit: "cover",
  },
}));

export const CustomButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "reverse",
})(({ theme, reverse, color }) => ({
  // display: "inline-block",
  width: "130px",
  height: "41px",
  backgroundColor: reverse ? "white" : theme.palette.primary.main,
  color: reverse ? theme.palette.primary.main : "white",
  fontSize: "14px",
  border: reverse ? `1px solid ${theme.palette.primary.main}` : undefined,
  "&:hover": {
    backgroundColor: reverse ? theme.palette.primary.main : undefined,
    color: reverse ? "white" : undefined,
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.down("md")]: {
    width: "110px",
    height: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100px",
    height: "25px",
  },
}));

export const CenteredGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    justifyContent: "flex-start",
  },
}));

export const DateWrapper = styled("span")(({ theme }) => ({
  color: "#9A9A9A",
  fontFamily: "Poppins",
  fontSize: "14px",
  fontWeight: 400,
  padding: "0 1rem",
  textTransform: "uppercase",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));
