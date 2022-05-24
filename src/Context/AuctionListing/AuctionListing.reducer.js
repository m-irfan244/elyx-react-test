import Types from "./AuctionListing.types";

export const initialState = {
  sortBy: "",
  listView: "grid",
};

export const AuctionListingReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.setSort:
      return {
        ...state,
        sortBy: action.payload,
      };
    case Types.setGridView:
      return {
        ...state,
        listView: "grid",
      };
    case Types.setListView:
      return {
        ...state,
        listView: "list",
      };
    default:
      return state;
  }
};
