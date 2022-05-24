import React from "react";
import GrowTransition from "Components/GrowTransition";
import { Box, Typography, Pagination } from "@mui/material";
import imgPlacerholder from "src/Images/listing1.png";

import AuctionList from "./AuctionList";

const activeAuctionsPlaceholder = [
  {
    id: 1,
    image: imgPlacerholder,
    name: "1990 Mitsubishi Delica Star Wagon Exceed 4WD",
    date: "9/5/2021",
    status: "Live now",
    minValue: "$1606",
  },
  {
    id: 2,
    image: imgPlacerholder,
    name: "1990 Mitsubishi Delica Star Wagon Exceed 4WD",
    date: "9/5/2021",
    status: "No Reserve",
    minValue: "$1606",
  },
  {
    id: 3,
    image: imgPlacerholder,
    name: "1990 Mitsubishi Delica Star Wagon Exceed 4WD",
    date: "9/5/2021",
    status: "Live now",
    minValue: "$1606",
  },
  {
    id: 4,
    image: imgPlacerholder,
    name: "1990 Mitsubishi Delica Star Wagon Exceed 4WD",
    date: "9/5/2021",
    status: "No Reserve",
    minValue: "$1606",
  },
  {
    id: 5,
    image: imgPlacerholder,
    name: "1990 Mitsubishi Delica Star Wagon Exceed 4WD",
    date: "9/5/2021",
    status: "No Reserve",
    minValue: "$1606",
  },
  {
    id: 6,
    image: imgPlacerholder,
    name: "1990 Mitsubishi Delica Star Wagon Exceed 4WD",
    date: "9/5/2021",
    status: "Live now",
    minValue: "$1606",
  },
  {
    id: 7,
    image: imgPlacerholder,
    name: "1990 Mitsubishi Delica Star Wagon Exceed 4WD",
    date: "9/5/2021",
    status: "Live now",
    minValue: "$1606",
  },
  {
    id: 8,
    image: imgPlacerholder,
    name: "1990 Mitsubishi Delica Star Wagon Exceed 4WD",
    date: "9/5/2021",
    status: "No Reserve",
    minValue: "$1606",
  },
];

export default function ManageAuctions() {
  return (
    <GrowTransition>
      <Box>
        <Typography variant="h1" sx={{ paddingBottom: "2rem" }}>
          Active Auctions
        </Typography>
        {activeAuctionsPlaceholder.map((auction) => (
          <AuctionList key={auction.id} auction={auction} />
        ))}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            paragraph
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#212529",
              fontFamily: "Poppins",
            }}
          >
            1-20 on 166+ Results
          </Typography>
          <Pagination
            count={10}
            variant="outlined"
            shape="rounded"
            color="primary"
          />
        </Box>
      </Box>
    </GrowTransition>
  );
}
