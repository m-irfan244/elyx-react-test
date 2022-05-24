import Types from "./AuctionListing.types";

export const setSort = (payload) => ({
  type: Types.setSort,
  payload,
});

export const setGridView = () => ({
  type: Types.setGridView,
});
export const setListView = () => ({
  type: Types.setListView,
});
