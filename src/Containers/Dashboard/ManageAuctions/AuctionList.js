import React from "react";
import styled from "@mui/system/styled";
import { Grid, Box, Typography, Chip } from "@mui/material";
import {
  CustomWrapper,
  CustomButton,
  CenteredGridItem,
  DateWrapper,
} from "../CommonStyles";

const CustomChip = styled(Chip)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: "#f8f8ff",
  marginRight: "0.5rem",
  fontSize: "0.75em",
}));

export default function UserList({ auction }) {
  const { image, name, date, status, minValue } = auction;
  return (
    <CustomWrapper sx={{ padding: "0.5rem" }}>
      <img src={image} alt={name} height="100%" />

      <Grid container sx={{ marginLeft: "0.5rem" }}>
        <Grid
          item
          xs={12}
          md={7}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography variant="h4" sx={{ fontSize: "16px", fontWeight: 600 }}>
            {name}
          </Typography>
          <DateWrapper sx={{ padding: 0 }}>{date}</DateWrapper>
          <Box>
            <CustomChip label={status} size="small" />
            <CustomChip label={minValue} size="small" />
          </Box>
        </Grid>
        <CenteredGridItem
          item
          xs={12}
          md={5}
          sx={{ "& button": { marginRight: "10px" } }}
        >
          <CustomButton reverse>Decline</CustomButton>
          <CustomButton>Approve</CustomButton>
        </CenteredGridItem>
      </Grid>
    </CustomWrapper>
  );
}
