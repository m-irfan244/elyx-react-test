import { useQuery } from "react-query";
import { getFeaturedAuction } from "../Api/auth";

export default function useFeaturedAuction() {
  return useQuery(["getFeaturedAuctionKey"], getFeaturedAuction, {
    staleTime: 1000 * 60 * 2, // 2 minutes
  });
}
