import React, { useContext } from "react";

import { Grid } from "@mui/material";
import ItemLayout from "./ItemLayout";
import AuctionItem from "./AuctionItem";
import ElyxSkeleton from "src/Components/Common/LoadingViews/ElyxSkeleton";
import { AuctionListingCtx } from "src/Context/AuctionListingContext";

const loadingViewCoutn = [0, 1, 2, 3, 4, 5, 6];
export default function AuctionList({ data, isLoading }) {
  const [{ sortBy }] = useContext(AuctionListingCtx);

  data.sort((a, b) => {
    let sorted
    if (sortBy === "asc") {
      sorted = Number(a.price) - Number(b.price)
    } else if (sortBy === "desc") {
      sorted = Number(b.price) - Number(a.price)
    }
    return sorted
  })

  return (
    <Grid
      container
      columnSpacing={2}
      rowSpacing={2}
      sx={{ marginBottom: "2rem" }}
    >
      {isLoading
        ? loadingViewCoutn?.map((item) => (
          <ItemLayout key={item}>
            <ElyxSkeleton />
          </ItemLayout>
        ))
        : data?.map((auctionItem) => (
          <ItemLayout key={auctionItem._id}>
            <AuctionItem auctionItem={auctionItem} />
          </ItemLayout>
        ))}
    </Grid>
  );
}
