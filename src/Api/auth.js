// Example Api ends points functions
import http from "../Utils/http";
import { DecriptionData } from "src/Utils/encription";
let user_id = localStorage.getItem("loginUser");
let userInfoID = "";

if (user_id) {
  const userinfo = DecriptionData(user_id);
  userInfoID = userinfo?.data?._id;
}

export const getLatestAuctions = (key) =>
  http.get(`/auth-backend/api/latest_auction`);
export const getPublishedAuctions = (key) =>
  http.get(`/auth-backend/api/live_auction`);
export const userRegister = (payload) =>
  http.post(`/auth-backend/api/register`, payload);
export const userResetPassword = (payload) =>
  http.post(`/auth-backend/api/reset_password`, payload);
export const userLogin = (payload) =>
  http.post(
    `/auth-backend/api/login?email=${payload?.email}&password=${payload?.password}`,
    payload
  );
export const getSingleUserAccount = (payload) =>
  http.get(`/auth-backend/api/user_account/${payload.queryKey[1]}`);
export const addNewUserApi = (payload) =>
  http.post(`/auth-backend/add_new_user`, payload);
export const userProfileEdit = (payload) =>
  http.post(`/auth-backend/api/user_account_update`, payload);
export const userChangePassword = (payload) =>
  http.post(`/auth-backend/api/change_password`, payload);
export const addSubmitAuctions = (payload) =>
  http.post(`/auth-backend/api/submit_auction/${userInfoID}`, payload);
export const getMyBidAuctions = (payload) =>
  http.get(`/auth-backend/api/my_bids/${payload?.queryKey[1]}`);
export const getUserAuctions = (payload) =>
  http.get(`/auth-backend/api/my_list/${payload?.queryKey[1]}`);
export const getSubscribtionEmail = (payload) =>
  http.post(`/auth-backend/api/subscription`, payload);
export const getFeaturedAuction = (payload) =>
  http.get(`/auth-backend/api/get_feature_auction`, payload.queryKey[1]);

// Auction Details API Calls
export const getAuctionDetails = (auctionId) =>
  http.get(`/auth-backend/api/user_single_auction/${auctionId}`);

export const getAuctionStats = (auctionId) =>
  http.get(
    `/auth-backend/api/user_single_auction_highest_bids_get/${auctionId}`
  );

export const getAuctionCommAndBids = (auctionId) =>
  http.post(`/auth-backend/api/bids_and_comment_list_get`, {
    auction_id: auctionId,
  });

export const submitBid = (payload) =>
  http.post(`/auth-backend/api/submit_bid/${payload.auction_id}`, payload);

export const submitComment = (payload) =>
  http.post(`/auth-backend/api/comment`, payload);

export const replyAuctionComment = (payload) =>
  http.post(`/auth-backend/api/reply_auction`, payload);

export const getCommentReply = (replyId) =>
  http.post(`/auth-backend/api/reply_get`, { reply_id: replyId });

export const getBidHistory = (auctionId) =>
  http.post(`/auth-backend/api/bids_histroy_get`, { auction_id: auctionId });

export const getComments = (auctionId) =>
  http.post(`/auth-backend/api/comment_gets`, { auction_id: auctionId });
