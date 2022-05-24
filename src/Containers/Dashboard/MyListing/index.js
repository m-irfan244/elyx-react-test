import React, { useEffect, useState } from "react";
import styled from "@mui/system/styled";
import GrowTransition from "../../../Components/GrowTransition";
import { Box, Typography } from "@mui/material";
import { getUserAuctions } from "./../../../Api/auth";
import ListItem from "./ListItem";
import { useQuery } from "react-query";
import { UseGlobalContext } from "../../../Hooks/globalContext/globalContext";
import MylistingSkeleton from "../../../Components/Common/LoadingViews/MylistingSkeleton";

export const CustomLabel = styled("label")(({ theme }) => ({

  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: 400,
}));

export const CustomListWrapper = styled("div")(({ theme }) => ({

  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: 400,
}));

export default function MyAccount() {
  const { userDetails } = UseGlobalContext();
  const [cardDataList, setCardDataList] = useState([])

  const { data: getUserAuctionsData, isLoading } = useQuery(["getUserAuctions", userDetails?._id], getUserAuctions, {
    enabled: userDetails?._id ? true : false
  });

  useEffect(() => {
    if (getUserAuctionsData) {
      const renderData = getUserAuctionsData?.data?.map((item, index) => {
        return {
          id: index + 1,
          auction_id: item?.auction_id,
          name: `${item?.auction_info?.model} ${item?.auction_info?.product_name}`,
          image: item?.auction_info?.product_image[0],
          date: `ON ${item?.auction_info?.bid_end_date.substr(0, 10)}`

        }
      })
      setCardDataList(renderData)
    }

  }, [getUserAuctionsData])

  return (
    <GrowTransition>
      <Box>
        <Typography variant="h1" sx={{ paddingBottom: "2rem" }}>
          My Listing
        </Typography>
        {
          isLoading ? cardDataList?.map((item, index) => (
            <MylistingSkeleton key={index} />
          ))
            : <CustomListWrapper>
              {
                cardDataList?.map((item) => (
                  <ListItem key={item.id} item={item} />
                ))
              }
            </CustomListWrapper>
        }
      </Box>
    </GrowTransition>
  );
}
