import { useQuery } from "react-query";
import { getAuctionCommAndBids } from "../Api/auth";

export default function useAuctionCommAndBids(auctionId) {
  const { data, isLoading, isFetching, isError } = useQuery(
    ["getAuctionCommAndBidsKey"],
    async () => await getAuctionCommAndBids(auctionId),
    {
      refetchInterval: 3500,
    }
  );
  return { data, isLoading, isFetching, isError };
}
