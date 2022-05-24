import React, { useState } from "react";
import { UseGlobalContext } from "src/Hooks/globalContext/globalContext";
import { useParams } from "react-router-dom";
import moment from "moment";
import useAuctionCommAndBids from "src/Hooks/useAuctionCommAndBids";
import useSubmitBid from "src/Hooks/useSubmitBid";
import { styled } from "@mui/material/styles";
import { Grid, Box, Tabs, Tab, Typography, Stack } from "@mui/material";
import ElyxButton from "src/Components/Common/ElyxButton.js/ElyxButton";
import ConfirmDialog from "src/Components/Common/ConfirmDialog";
import PostAction from "./PostAction";
import CommentCard from "./CommentCard";
import { ShowSignInSignUpDialog } from "src/Components/Modals/SignInSignUpDialog";
import { NOTIFICATIONTYPE } from "src/Utils/contants";
import useBidHistory from "src/Hooks/useBidHistory";
import ElyxSkeleton from "src/Components/Common/LoadingViews/ElyxSkeleton";
import useAuctionComments from "src/Hooks/useAuctionComments";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CustomTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "#1890ff",
  },
});

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "14px",
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",
    "&.Mui-selected": {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

export default function CommentsAndBids({ bidEndDate }) {
  const { auctionId } = useParams();
  const { data: commAndBidsData, isLoading: isCommAndBidsLoading } =
    useAuctionCommAndBids(auctionId);
  const { data: bidHistoryData, isLoading: isBidHistoryLoading } =
    useBidHistory(auctionId);

  const { data: commentsData, isLoading: isCommentsLoading } =
    useAuctionComments(auctionId);
  const [value, setValue] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeAction, setActiveAction] = useState();
  const [commentData, setCommentData] = useState("");
  const [bidData, setBidData] = useState("");
  const { setNotificationState, userDetails, isUserLogin } = UseGlobalContext();
  const [mutateAsync, isLoading] = useSubmitBid({
    auction_id: auctionId,
    user_id_buyer: userDetails?._id,
    bid_amount: bidData,
    comment: commentData,
  });

  const handleTabChange = (event, value) => {
    setValue(value);
  };

  const handleOpenDialog = () => {
    if(commentData.trim() === "" && bidData === "") {
      setIsDialogOpen(false);
      setNotificationState({
        isNotification: true,
        type: `${NOTIFICATIONTYPE.ERROR}`,
        message: `input field is empty`,
      });
    }
    else {
      setIsDialogOpen(true);
    }
  };

  const resetBidAndCommentsInput = () => {
    setCommentData("");
    setBidData("");
  };

  const handlePostAction = async () => {
    if (!isUserLogin) {
      setNotificationState({
        isNotification: true,
        type: `${NOTIFICATIONTYPE.ERROR}`,
        message: `You must be signed in to post a ${
          activeAction === "comment" ? "comment" : "bid"
        } `,
      });
      return ShowSignInSignUpDialog();
    }
    try {
      const response = await mutateAsync();
      if (!response.data.status) {
        setNotificationState({
          isNotification: true,
          type: `${NOTIFICATIONTYPE.ERROR}`,
          message: `${response?.data?.status_message}`,
        });
      } else {
        setNotificationState({
          isNotification: true,
          type: `${NOTIFICATIONTYPE.SUCCESS}`,
          message: `${response?.data?.status_message}`,
        });
      }
      resetBidAndCommentsInput();
    } catch (error) {
      resetBidAndCommentsInput();
      setNotificationState({
        isNotification: true,
        type: `${NOTIFICATIONTYPE.ERROR}`,
        message: `${error?.message}`,
      });
    }
  };

  const displayData =
    value === 0
      ? commAndBidsData?.data.data || []
      : value === 1
      ? bidHistoryData?.data.data || []
      : commentsData?.data.data || [];

  const dialogMessage =
    activeAction && activeAction === "comment"
      ? "Are you sure you want to post the comment?"
      : "Are you sure you want to submit the bid?";

  const hasAuctionExpired = moment(bidEndDate).isBefore(moment(Date.now()));

  if (isCommAndBidsLoading || isBidHistoryLoading || isCommentsLoading) {
    return (
      <Box mt={2}>
        <ElyxSkeleton />
        <ElyxSkeleton />
        <ElyxSkeleton />
        <ElyxSkeleton />
      </Box>
    );
  }

  return (
    <>
      <Grid container item>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            borderBottom: " 1px solid #dee2e6",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Comments & Bids</Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <CustomTabs
            value={value}
            onChange={handleTabChange}
            aria-label="basic tabs example"
            variant="fullWidth"
          >
            <CustomTab label="Newest" {...a11yProps(0)} />
            <CustomTab label="Bid History" {...a11yProps(1)} />
            <CustomTab label="Comments" {...a11yProps(2)} />
          </CustomTabs>
        </Grid>
        <Stack direction="row" spacing={2} marginY={3}>
          <ElyxButton
            mr={2}
            onClick={() =>
              setActiveAction((prevState) =>
                prevState === "comment" ? null : "comment"
              )
            }
          >
            Post a Comment
          </ElyxButton>
          <ElyxButton
            reverse
            name="bid"
            onClick={() =>
              setActiveAction((prevState) =>
                prevState === "bid" ? null : "bid"
              )
            }
          >
            Make a Bid
          </ElyxButton>
        </Stack>
        <Grid item xs={12}>
          {activeAction === "comment" && (
            <PostAction
              name="post"
              placeholder="Add a comment"
              data={commentData}
              setData={setCommentData}
              onPostClick={handleOpenDialog}
              loading={isLoading}
              disabled={hasAuctionExpired}
            />
          )}
          {activeAction === "bid" && (
            <PostAction
              name="bid"
              placeholder="Place a bid"
              data={bidData}
              setData={setBidData}
              onPostClick={handleOpenDialog}
              loading={isLoading}
              disabled={hasAuctionExpired}
            />
          )}
        </Grid>
        <Grid
          container
          item
          xs={12}
          sx={{
            maxHeight: "650px",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "5px",
              backgroundColor: "#F5F5F5",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#000000",
              border: "2px solid #555555",
            },
          }}
        >
          {displayData.map((item) => {
            return (
              <CommentCard
                key={item._id}
                item={item}
                auctionId={auctionId}
                userIdBuyer={userDetails?._id}
              />
            );
          })}
        </Grid>
      </Grid>
      <ConfirmDialog
        message={dialogMessage}
        open={isDialogOpen}
        onConfirm={handlePostAction}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
}
