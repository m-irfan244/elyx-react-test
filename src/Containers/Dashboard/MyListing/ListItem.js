import React from "react";
import styled from "@mui/system/styled";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CustomWrapper, DateWrapper, CenteredGridItem, CustomButton } from "../CommonStyles";

const CustomTitle = styled(Typography)(({ theme }) => ({
  padding: "0 1rem",
}));

export default function ListItem({ item }) {
  const { image, name, date, auction_id } = item;
  return (
    <CustomWrapper>
      <img style={{ width: "152px" }} src={image} alt={name} />
      <Grid container rowGap={2}>
        <Grid item xs={12} md={8}>
          <CustomTitle>{name} </CustomTitle>
        </Grid>
        <Grid item sm={12} md={4}>
          <CenteredGridItem
            item
            xs={12}
            sm={8}
            md={12}
            sx={{
              "& button": {
                margin: "0 5px",
              },
            }}
          >
            <DateWrapper> {date}</DateWrapper>
            <CustomButton to={"/auction/" + auction_id} component={Link} >View Auction</CustomButton>
          </CenteredGridItem>
        </Grid>
      </Grid>
    </CustomWrapper>
  );
}
