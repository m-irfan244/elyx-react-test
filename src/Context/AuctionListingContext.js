import React, { createContext, useReducer } from "react";
import {
  initialState,
  AuctionListingReducer,
} from "./AuctionListing/AuctionListing.reducer";

export const AuctionListingCtx = createContext();

export const AuctionListingContext = ({ children }) => {
  const [state, dispatch] = useReducer(AuctionListingReducer, initialState);
  const value = [state, dispatch];
  return (
    <AuctionListingCtx.Provider value={value}>
      {children}
    </AuctionListingCtx.Provider>
  );
};
