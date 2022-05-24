import { useQuery } from "react-query";
import { getBidHistory } from "../Api/auth";

export default function useBidHistory(auctionId) {
  const { data, isLoading, isFetching, isError } = useQuery(
    ["getAuctionBidHistoryKey"],
    async () => await getBidHistory(auctionId),
    {
      refetchInterval: 3500,
    }
  );
  return { data, isLoading, isFetching, isError };
}
