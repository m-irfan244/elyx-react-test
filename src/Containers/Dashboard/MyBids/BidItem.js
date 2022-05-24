import React from "react";
import styled from "@mui/system/styled";
import { Grid, Typography } from "@mui/material";
import {
  CustomWrapper,
  CustomButton,
  DateWrapper,
  CenteredGridItem,
} from "../CommonStyles";

const CustomTitle = styled(Typography)(({ theme }) => ({
  padding: "0 1rem",
  [theme.breakpoints.down("lg")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

export default function ListItem({ item }) {
  const { image, name, date, auction_id } = item;
  return (
    <CustomWrapper>
      <img style={{ width: "152px" }} src={image} alt={name} />
      <Grid container>
        <Grid item xs={12} sm={6} md={7}>
          <CustomTitle>{name} </CustomTitle>
          <DateWrapper> {date}</DateWrapper>
        </Grid>
        <CenteredGridItem
          item
          xs={12}
          sm={6}
          md={5}
          sx={{
            "& button": {
              margin: "0 5px",
            },
          }}
        >
          <CustomButton reverse>Bid $160,600</CustomButton>
          <CustomButton href={"/auction/" + auction_id}>View Auction</CustomButton>
        </CenteredGridItem>
      </Grid>
    </CustomWrapper>
  );
}
