import React from "react";
import { styled } from "@mui/system";
import { Grid, Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";

const CustomGrid = styled(Grid)(() => ({
  fontFamily: "Poppins",
  fontSize: ".875em",
  borderRadius: "0.35em 0.35em 0 0",
  border: "1px solid #dee2e6",
  padding: "1rem 2rem",
}));
const CenterBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  margin: "10px 0",
}));

export default function CurrentBidCard({
  bidPrice,
  highestBidder,
  seller,
  bidsTotal,
}) {
  return (
    <CustomGrid container item>
      <Grid item xs={12} sm={6}>
        <Typography>CURRENT BID</Typography>
        <Typography variant="h1" sx={{ wordWrap: "break-word" }}>
          {bidPrice === "" ? "N/A" : `$${bidPrice}`}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ margin: "auto 0" }}>
        <CenterBox>
          <AccountCircleIcon color="primary" fontSize="small" />
          Highest Bidder: {highestBidder}
        </CenterBox>
        <CenterBox>
          <AccountCircleIcon color="primary" fontSize="small" />
          Seller: {seller}
        </CenterBox>
        <CenterBox>
          <GavelRoundedIcon color="primary" fontSize="small" />
          Bids: #{bidsTotal}
        </CenterBox>
      </Grid>
    </CustomGrid>
  );
}
