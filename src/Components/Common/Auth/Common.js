import styled from "@mui/system/styled";
import { Box, Typography, Link } from "@mui/material";

export const CustomBox = styled(Box)(({ theme }) => ({
  padding: "1.2rem",
  maxWidth: "550px",
  [theme.breakpoints.down("sm")]: {
    padding: "0.8rem",
  },
}));

export const CustomTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "30px",
  fontWeight: 900,
  margin: "12px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "26px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "22px",
  },
}));

export const CustomParagraph = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: 400,
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12",
  },
}));

export const CustomMuiLink = styled(Link)(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: 500,
  textDecoration: "none",
  color: "#0056b3",
  cursor: "pointer",

  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12",
  },
}));

export const inputStyle = { borderRadius: "10px", margin: "0.4rem 0" };
