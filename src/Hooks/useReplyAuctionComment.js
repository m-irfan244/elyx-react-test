import { useMutation } from "react-query";
import { replyAuctionComment } from "src/Api/auth";

export default function useReplyAuctionComment(data) {
  // const queryClient = useQueryClient();

  const { mutateAsync, isLoading, isError } = useMutation(() =>
    replyAuctionComment(data)
  );

  return [mutateAsync, isLoading, isError];
}
