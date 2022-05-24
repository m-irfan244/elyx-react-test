import React, { useContext } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import {
  ItemWrapper,
  ImageWrapper,
  BidWrapper,
  CustomTitle,
  LocationParagraph,
} from "./AuctionItem.styles";
import { AuctionListingCtx } from "../../Context/AuctionListingContext";

export default function AuctionItem({ auctionItem }) {
  const [{ listView }] = useContext(AuctionListingCtx);
  const {
    product_name,
    // image,
    product_image,
    location,
    price,
    _id,
    model,
    manufacture,
    engine,
  } = auctionItem;

  return (
    <Link to={`/auction/${_id}`}>
      <ItemWrapper listView={listView}>
        <ImageWrapper listView={listView}>
          <img src={`${product_image[0]}`} alt={product_name} />
          <BidWrapper>
            Bid <span>${price}</span>
          </BidWrapper>
        </ImageWrapper>
        <Box sx={{ padding: "0 1rem" }}>
          <CustomTitle>
            {`${model} ${product_name} ${manufacture} ${engine}`}
          </CustomTitle>
          <LocationParagraph>{location}</LocationParagraph>
        </Box>
      </ItemWrapper>
    </Link>
  );
}
