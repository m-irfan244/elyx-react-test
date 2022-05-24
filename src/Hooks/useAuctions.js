import { useQuery } from "react-query";
import { getPublishedAuctions } from "../Api/auth";

export default function useAuctions() {
  const { data, isLoading, isFetching, isError } = useQuery(
    ["getPublishedAuctionsKey"],
    getPublishedAuctions
  );
  return [data, isLoading, isFetching, isError];
}
