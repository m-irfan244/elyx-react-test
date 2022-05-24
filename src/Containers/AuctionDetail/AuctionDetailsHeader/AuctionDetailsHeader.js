import React, { Fragment } from "react";
import { Grid, Stack } from "@mui/material";
import {
  AuctionTitle,
  DescriptionTitle,
  ActionWrapper,
} from "./AuctionDetailsHeader.style";
import CustomChip from "src/Components/Common/CustomChip";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ReplyIcon from "@mui/icons-material/Reply";

export default function AuctionDetailsHeader({
  title,
  description,
  minimumPrice,
  feature,
}) {
  return (
    <Fragment>
      <Grid item sm={12} md={6}>
        <AuctionTitle>{title}</AuctionTitle>
        <Stack direction="row" spacing={2} alignItems="center">
          <CustomChip
            label={minimumPrice ? `$${minimumPrice}` : "NO RESERVE"}
            bgColor="secondary.main"
          />
          <DescriptionTitle>{feature}</DescriptionTitle>
        </Stack>
      </Grid>
      <Grid
        item
        display="flex"
        alignItems="flex-start"
        justifyContent="flex-end"
        sm={12}
        md={6}
      >
        <ActionWrapper>
          <ReplyIcon fontSize="small" />
          <span>Share</span>
        </ActionWrapper>
        <ActionWrapper>
          <FavoriteBorderOutlinedIcon fontSize="small" />
          <span>Favourite</span>
        </ActionWrapper>
      </Grid>
    </Fragment>
  );
}
