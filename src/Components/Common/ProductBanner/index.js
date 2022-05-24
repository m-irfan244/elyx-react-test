import React from "react";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Paper, Grid, Button, Typography } from "@mui/material/";
import { Link } from "react-router-dom";

const CustomSpan = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export default function ProductBanner() {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Paper
      sx={{ padding: "4rem", backgroundColor: "common.lightGrey" }}
      elevation={0}
    >
      <Grid container rowGap={2}>
        <Grid item xs={12} md={8}>
          <Typography
            variant="h1"
            textAlign={match ? "center" : "left"}
            sx={{
              [theme.breakpoints.down("md")]: {
                fontSize: "2rem",
              },
            }}
          >
            The <CustomSpan>best marketplace</CustomSpan> for All Products
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="primary"
            size={match ? "medium" : "large"}
            component={Link}
            to="/auctions"
            sx={{
              [theme.breakpoints.down("md")]: {
                fontSize: "1rem",
              },
            }}
          >
            Browse Auction
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
