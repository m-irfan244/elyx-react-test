import React from "react";
import { styled } from "@mui/system";
import { Grid } from "@mui/material";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";

const CustomSpan = styled("span")(() => ({
  fontFamily: "Poppins",
  fontSize: "14px",
  lineHeight: "25px",
  marginLeft: "0.1rem",
}));
const GridItem = styled(Grid)(() => ({
  display: "flex",
  alignItems: "center",
}));

export default function FaqSection() {
  return (
    <Grid
      container
      item
      sx={{ backgroundColor: "ghostwhite", padding: "1rem" }}
    >
      <GridItem item xs={6} sm={6} sx={{ margin: "auto 0" }}>
        <HelpOutlineRoundedIcon fontSize="small" />{" "}
        <CustomSpan>How to place a bid?</CustomSpan>
      </GridItem>
      <GridItem item xs={6} sm={6}>
        <HelpOutlineRoundedIcon fontSize="small" />{" "}
        <CustomSpan>How to place a Comments?</CustomSpan>
      </GridItem>
    </Grid>
  );
}
