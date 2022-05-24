import React, { Fragment } from "react";
import { Grid, Typography } from "@mui/material";
import ItemInfoBlock from "./ItemInfoBlock";

export default function BidOnThisListing({
  currentBid,
  timeLeft,
  endsOn,
  bids,
}) {
  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography variant="h3" color="primary" sx={{ padding: "1rem 0" }}>
          Bid on this listing
        </Typography>
      </Grid>

      <ItemInfoBlock
        name="Current Bid"
        value={currentBid}
        xsValue={12}
        nameWidth="25%"
        valueWidth="75%"
        weight={600}
      />
      <ItemInfoBlock
        name="Time Left"
        value={timeLeft}
        xsValue={12}
        nameWidth="25%"
        valueWidth="75%"
        weight={600}
      />
      <ItemInfoBlock
        name="Ends On"
        value={endsOn}
        xsValue={12}
        nameWidth="25%"
        valueWidth="75%"
        weight={600}
      />
      <ItemInfoBlock
        name="Bids"
        value={bids}
        xsValue={12}
        nameWidth="25%"
        valueWidth="75%"
        weight={600}
      />
    </Fragment>
  );
}
