import { useQuery } from "react-query";
import { getAuctionDetails } from "../Api/auth";

export default function useAuctionDetails(auctionId) {
  const { data, isLoading, isFetching, isError } = useQuery(
    ["getAuctionDetailsKey"],
    async () => await getAuctionDetails(auctionId)
  );
  return [data, isLoading, isFetching, isError];
}
