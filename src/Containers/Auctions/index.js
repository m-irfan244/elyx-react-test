import React, { useEffect, useMemo, useState } from "react";
import useDocumentTitle from "src/Hooks/useDocumentTitle";
import { AuctionListingContext } from "src/Context/AuctionListingContext";
import styled from "@mui/system/styled";
import { Pagination } from "@mui/material";
import { CustomContainer } from "src/Components";
import useAuctions from "src/Hooks/useAuctions";

import TopBanner from "src/Components/Common/TopBanner";
import TopControls from "./TopControls";
import AuctionList from "./AuctionList";

const Auctions = () => {
  useDocumentTitle("Elyx - Auctions");
  const [data, isLoading, isFetching] = useAuctions();
  const [actionListItems, setActionListItems] = useState([])
  const [currentPage, setCurrentPage] = useState(0); 
   let PageSize = 12

  const handlePagination = (event, pageNo) => {
    setCurrentPage(pageNo)
  }

  useEffect(() => {
    let mounted = true
    if (data?.data) {
      if (mounted) {
        setActionListItems(data?.data?.live_auction)
        setCurrentPage(1)
      }
    }
    return () => {
      mounted = false
    }
  }, [data?.data])

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    if (actionListItems) {
      return actionListItems?.slice(firstPageIndex, lastPageIndex)
    }
  }, [currentPage, actionListItems, PageSize]);

  let countPage = actionListItems.length / 12

  if (!Number.isInteger(countPage)) {
    countPage = (Number(countPage.toString().split(".")[0]) + 1)
  }
  return (
    <AuctionListingContext>
      <AuctionsWrapper>
        <TopBanner />
        <CustomContainer sx={{ marginBottom: "3rem" }}>
          <TopControls
            isFetching={isFetching}
            TotalItems={actionListItems?.length}
            currentTableData={currentTableData}
          />
          <AuctionList data={currentTableData} isLoading={isLoading} />

          <Pagination
            variant="outlined"
            color="primary"
            shape="rounded"
            size="medium"
            onChange={handlePagination}
            count={countPage}
            page={currentPage}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "2rem",
            }}
          />
        </CustomContainer>
      </AuctionsWrapper>
    </AuctionListingContext>
  );
};

const AuctionsWrapper = styled("div")(({ theme }) => ({}));

export default Auctions;

