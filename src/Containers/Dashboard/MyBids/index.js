import React, { useState, useEffect } from "react";
import GrowTransition from "src/Components/GrowTransition";
import { Box, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { UseGlobalContext } from "../../../Hooks/globalContext/globalContext";
import BidItem from "./BidItem";
import { getMyBidAuctions } from "src/Api/auth";
export default function MyBids() {
  const { userDetails } = UseGlobalContext();
  const [CardMyBidData, setCardMyBidData] = useState([])

  const { data: getMyBidAuc } = useQuery(["getMyBidAuctionskey", userDetails?._id], getMyBidAuctions, {
    enabled: userDetails?._id ? true : false
  });

  useEffect(() => {
    if (getMyBidAuc) {
      const renderData = getMyBidAuc?.data?.map((item, index) => {
        return {
          id: index + 1,
          auction_id: item?.auction_id,
          name: `${item?.auction_info?.model} ${item?.auction_info?.product_name}`,
          image: item?.auction_info?.auction_image,
          date: item?.bid_time.substr(0,10),
          bidAmount:item?.bid_amount

        }
      })
      setCardMyBidData(renderData)
    }

  }, [getMyBidAuc])
  return (
    <GrowTransition>
      <Box>
        <Typography variant="h1" sx={{ paddingBottom: "2rem" }}>
          My Bids
        </Typography>
        {CardMyBidData.map((item) => (
          <BidItem  key={item.id} item={item} />
        ))}
      </Box>
    </GrowTransition>
  );
}
