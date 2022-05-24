import { styled } from "@mui/system";

export const AuctionTitle = styled("h1")(({ theme }) => ({
  fontFamily: "Poppins",
  fontWeight: 700,
  fontSize: "35px",
  lineHeight: "40px",
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
  },
}));

export const ActionWrapper = styled("a")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Poppins",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "40px",
  marginLeft: "1rem",
  marginTop: "10px",
  cursor: "pointer",
  "& svg": {
    transform: "rotate(180deg) scaleY(-1)",
  },
}));

export const DescriptionTitle = styled("h3")(({ theme }) => ({
  fontSize: "16px",
  fontFamily: "Poppins",
  fontWeight: 400,
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));
