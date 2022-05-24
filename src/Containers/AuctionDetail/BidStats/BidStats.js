import React from "react";
import { Stack, Link } from "@mui/material";
import { CustomGridItem, Item, CustomSpan, BidButton } from "./BidStats.style";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ChatIcon from "@mui/icons-material/Chat";
import Countdown from "react-countdown";

export default function BidStats({
  timeLeft,
  highestBid,
  bidsTotal,
  commentsTotal,
}) {
  return (
    <CustomGridItem item xs={12}>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="space-between"
        flexWrap="wrap"
        flexBasis="85%"
        paddingX={1}
      >
        <Item>
          <AccessTimeIcon
            sx={{ color: "#5E97FF", fontSize: "16px", marginRight: "0.3rem" }}
          />{" "}
          <Countdown date={timeLeft}>
            <span style={{ color: "red" }}>Expired</span>
          </Countdown>
        </Item>
        <Item>
          <ArrowUpwardIcon sx={{ color: "#5E97FF", fontSize: "16px" }} />
          <CustomSpan>Highest Bid </CustomSpan>
          {highestBid === "" ? "N/A" : `$${highestBid}`}
        </Item>
        <Item>
          <CustomSpan># Bids</CustomSpan>
          {bidsTotal}
        </Item>
        <Item>
          <ChatIcon
            sx={{ color: "#5E97FF", fontSize: "16px", marginRight: "0.3rem" }}
          />
          <CustomSpan>Comments</CustomSpan>
          {commentsTotal}
        </Item>
      </Stack>
      <Item isButton sx={{ flexBasis: "15%" }}>
        <BidButton>
          <Link
            href="#place_bid"
            sx={{ color: "white", textDecoration: "none" }}
          >
            Place bid
          </Link>
        </BidButton>
      </Item>
    </CustomGridItem>
  );
}
