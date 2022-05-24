import React from "react";
import { styled } from "@mui/system";
import { Grid } from "@mui/material";
import Countdown from "react-countdown";

const ItemWrapper = styled("div", {
  shouldForwardProp: (prop) =>
    prop !== "nameBox" && prop !== "width" && prop !== "weight",
})(({ theme, nameBox, width, weight }) => ({
  padding: "0.75rem",
  boxSizing: "border-box",
  flexBasis: width,
  width: width,
  fontFamily: "Poppins",
  fontSize: "14px",
  fontWeight: weight || 400,
  textAlign: "left",
  backgroundColor: nameBox && theme.palette.common.lightGrey,
  border: !nameBox && "1px solid #F8F8FF",
  [theme.breakpoints.down("xs")]: {
    fontSize: "12px",
  },
}));

export default function ItemInfoBlock({
  name,
  value,
  mdValue,
  xsValue,
  nameWidth,
  valueWidth,
  weight,
}) {
  return (
    <Grid item xs={xsValue} md={mdValue} display="flex">
      <ItemWrapper nameBox width={nameWidth} weight={weight}>
        {name}
      </ItemWrapper>
      <ItemWrapper width={valueWidth}>
        {name === "Time Left" ? <Countdown date={value} /> : value}
      </ItemWrapper>
    </Grid>
  );
}
