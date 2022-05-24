import styles from "@mui/system/styled";

export const CustomContainer = styles("div")(({ theme }) => ({
  width: "75%",
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    width: "95%",
  },
}));
