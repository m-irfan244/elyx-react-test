import { useQuery } from "react-query";
import { getAuctionStats } from "../Api/auth";

export default function useAuctionStats(auctionId) {
  const { data, isLoading, isFetching, isError } = useQuery(
    ["getAuctionStatsKey"],
    async () => await getAuctionStats(auctionId),
    {
      refetchInterval: 2000,
    }
  );
  return { data, isLoading, isFetching, isError };
}
