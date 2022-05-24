import styles from "@mui/system/styled";

export const CustomSpan = styles("span")(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const CustomParagraph = styles("p")(({ theme }) => ({
  fontFamily: "Poppins",
  fontWeight: "400",
  fontSize: theme.typography.fontSize,
  lineHeight: "23.7px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));
