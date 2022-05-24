import React, { useContext } from "react";
import { AuctionListingCtx } from "src/Context/AuctionListingContext";
import {
  setSort,
  setGridView,
  setListView,
} from "src/Context/AuctionListing/AuctionListing.action";
import styled from "@mui/system/styled";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";

const CustomTitle = styled("h2")(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "20px",
  fontWeight: 600,
}));

const CustomSpan = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export default function TopControls({ isFetching, TotalItems}) {
  const [{ sortBy, listView }, dispatch] = useContext(AuctionListingCtx);

  const handleView = () => {
    return listView === "grid"
      ? dispatch(setListView())
      : dispatch(setGridView());
  };
  const handleChange = (event) => {
    return (
      dispatch(setSort((event.target.value)))
    ) 
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <CustomTitle>
        Live now <CustomSpan>({TotalItems})</CustomSpan>{" "}
        {isFetching && <CircularProgress size={20} />}
      </CustomTitle>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ViewListIcon
          color={listView === "list" ? "primary" : undefined}
          onClick={handleView}
          sx={{ cursor: "pointer" }}
        />
        <ViewComfyIcon
          color={listView === "grid" ? "primary" : undefined}
          onClick={handleView}
          sx={{ cursor: "pointer" }}
        />

        <FormControl fullWidth sx={{ marginLeft: "0.8rem" }}>
          <Select value={sortBy} onChange={handleChange} size="small">
            <MenuItem value="asc">Bid: Low to High</MenuItem>
            <MenuItem value="desc">Bid: High to Low</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
