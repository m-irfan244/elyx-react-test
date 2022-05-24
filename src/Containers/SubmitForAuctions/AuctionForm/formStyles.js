import { styled } from "@mui/material/styles";
import { Box, TextField, ToggleButtonGroup } from "@mui/material";

export const FeatureBox = styled(Box)(() => ({
  padding: "0.5rem",
  backgroundColor: "#F8F8FF",
  border: "1px solid #ededf5",
  width: "130px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  fontFamily: "Poppins",
  fontSize: "14px",
  fontWeight: 400,
}));

export const InputBox = styled(Box)(() => ({
  padding: "0.5rem",
  border: "1px solid #ededf5",
  width: "100%",
  display: "flex",
  alignItems: "center",
}));

export const FlatTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "bgColor",
})(({ bgColor }) => ({
  backgroundColor: bgColor || "white",
  "& fieldset": { borderRadius: 0 },
}));

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(
  ({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
      marginRight: "15px",
      border: 0,
      "&.Mui-disabled": {
        border: 0,
      },

      "&:not(:first-of-type)": {
        borderRadius: "10px",
        border: `1px solid ${theme.palette.primary.main}`,
        backgroundColor: "white",
        color: theme.palette.primary.main,
        textTransform: "capitalize",
        fontWeight: 400,
        "&.Mui-selected": {
          color: "white",
          backgroundColor: theme.palette.primary.main,
        },
      },
      "&:first-of-type": {
        borderRadius: "10px",
        border: `1px solid ${theme.palette.primary.main}`,
        backgroundColor: "white",
        color: theme.palette.primary.main,
        textTransform: "capitalize",
        fontWeight: 400,
        "&.Mui-selected": {
          color: "white",
          backgroundColor: theme.palette.primary.main,
        },
      },
    },
  })
);
