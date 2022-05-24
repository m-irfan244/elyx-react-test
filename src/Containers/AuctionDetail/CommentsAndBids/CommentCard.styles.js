import { styled } from "@mui/system";

export const Item = styled("div")(() => ({
  fontFamily: "Poppins",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const CommentName = styled("h2")(({ theme }) => ({
  fontFamily: "Poppins",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "0",
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

export const CommentDescription = styled("p")(({ theme }) => ({
  fontFamily: "Poppins",
  fontWeight: 400,
  fontSize: "18px",
  // lineHeight: "20px",
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

export const CommentInfo = styled("span", {
  shouldForwardProp: (prop) => prop !== "isTime",
})(({ theme, isTime }) => ({
  color: !isTime ? theme.palette.primary.main : "#999595",
  fontFamily: "Poppins",
  fontSize: "16px",
}));
