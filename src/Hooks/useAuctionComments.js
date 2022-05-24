import { useQuery } from "react-query";
import { getComments } from "../Api/auth";

export default function useAuctionComments(auctionId) {
  const { data, isLoading, isFetching, isError } = useQuery(
    ["getCommentsKey"],
    async () => await getComments(auctionId),
    {
      refetchInterval: 3500,
    }
  );
  return { data, isLoading, isFetching, isError };
}
