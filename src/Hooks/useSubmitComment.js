import { useMutation, useQueryClient } from "react-query";
import { submitBid } from "src/Api/auth";

export default function useSubmitBid(data) {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading, isError } = useMutation(
    () => submitBid(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getAuctionCommAndBidsKey");
      },
    }
  );

  return [mutateAsync, isLoading, isError];
}
