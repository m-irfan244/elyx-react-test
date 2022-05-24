import React, { useReducer, useState } from "react";
import { useTheme } from "@mui/material";
import useReplyAuctionComment from "src/Hooks/useReplyAuctionComment";
import { styled } from "@mui/material/styles";
import moment from "moment";
import {
  Grid,
  Box,
  Avatar,
  Typography,
  Stack,
  OutlinedInput,
  InputAdornment,
  Chip,
  Badge,
} from "@mui/material";
import {
  Item,
  CommentName,
  CommentInfo,
  CommentDescription,
} from "./CommentCard.styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import FlagIcon from "@mui/icons-material/Flag";
// import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ElyxButton from "src/Components/Common/ElyxButton.js/ElyxButton";
import { getCommentReply } from "src/Api/auth";
import CircularProgress from "@mui/material/CircularProgress";

const CSpan = styled("span")({
  marginLeft: "0.5rem",
});

export default function CommentCard({ item, auctionId, userIdBuyer }) {
  const {
    _id,
    user_info: { name },
    comment,
    created_at,
    bid_status,
    bid_amount,
    count,
  } = item;
  const theme = useTheme();
  // const [flagged, toggleFlagged] = useReducer((d) => !d, false);
  const [replying, toggleReplying] = useReducer((d) => !d, false);
  const [showReply, toggleShowReply] = useReducer((d) => !d, false);
  const [replyContent, setReplyContent] = useState("");
  const [replyData, setReplyData] = useState([]);
  const [isPosting, setIsPosting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [mutateAsync] = useReplyAuctionComment({
    auction_id: auctionId,
    reply_id: _id,
    user_id_buyer: userIdBuyer,
    comment: replyContent,
  });

  const getReplyData = () => {
    toggleShowReply();
    if (count > 0) {
      setIsLoading(true);
      getCommentReply(_id)
        .then((response) => setReplyData(response?.data?.data))
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));
    } else {
      return;
    }
  };

  const commonBtnStyles = {
    textTransform: "none",
    fontSize: "16px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
    },
  };

  const handleInputChange = (event) => {
    setReplyContent(event.target.value);
  };

  const handlePostReply = async () => {
    setIsPosting(true);
    try {
      const response = await mutateAsync();
      setReplyData(response.data.data);
      if (!showReply) {
        toggleShowReply();
      }
      setReplyContent("");
    } catch (error) {
      console.log(error);
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <Grid
      container
      item
      xs={12}
      columnSpacing={4}
      sx={{ padding: "1rem 0", borderBottom: "1px solid rgba(0,0,0,.1)" }}
    >
      <Grid item xs={1}>
        <Avatar alt={name}>{name[0]}</Avatar>
      </Grid>
      <Grid item xs={11}>
        <Stack direction="row" spacing={2}>
          <Item>
            <CommentName>{name}</CommentName>
          </Item>
          <Item>
            <CommentInfo isTime>{moment(created_at).fromNow()}</CommentInfo>
          </Item>
        </Stack>
        {bid_status ? (
          <CommentDescription>{comment}</CommentDescription>
        ) : (
          <Chip
            label={`Bid $${bid_amount}`}
            sx={{
              backgroundColor: "common.heading",
              color: "white",
              marginY: "0.5rem",
            }}
          />
        )}

        <Stack direction="row" spacing={2} alignItems="center">
       {
         bid_status ?(
           <>
              <ElyxButton
            clean
            startIcon={<ArrowUpwardIcon />}
            height="40px"
            maxWidth="70px"
            sx={commonBtnStyles}
            onClick={toggleReplying}
          >
            {/* <Badge badgeContent={count} color="primary">
              <ChatBubbleOutlineIcon color="action" fontSize="small" />
            </Badge> */}
            Reply
          </ElyxButton>
          <ElyxButton
            clean
            height="40px"
            width="auto"
            // startIcon={
            //   flagged ? (
            //     <FlagIcon sx={{ color: "red" }} />
            //   ) : (
            //     <FlagOutlinedIcon />
            //   )
            // }
            sx={commonBtnStyles}
            onClick={getReplyData}
          >
            <Badge badgeContent={count} color="primary">
              <ChatBubbleOutlineIcon color="action" fontSize="sm" />
            </Badge>
            <CSpan>Show comments </CSpan>
            {isLoading && (
              <CSpan>
                <CircularProgress size={15} />
              </CSpan>
            )}
          </ElyxButton>
           </>
         )
         :
         ("")
       }
        </Stack>
        {replying && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "1.5rem",
              backgroundColor: "#f7f7f7",
            }}
          >
            <Typography mb={1}>
              Replying to{" "}
              <Typography color="primary" component={"span"}>
                {name}
              </Typography>
            </Typography>
            <OutlinedInput
              size="small"
              fullWidth
              value={replyContent}
              onChange={handleInputChange}
              endAdornment={
                <InputAdornment position="end" sx={{ height: "100%" }}>
                  <ElyxButton
                    clean
                    width="50px"
                    height="100%"
                    disabled={replyContent.length === 0 || isPosting}
                    disableRipple
                    sx={{
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                    onClick={handlePostReply}
                  >
                    {isPosting ? "Posting..." : "Post"}
                  </ElyxButton>
                </InputAdornment>
              }
              sx={{ backgroundColor: "white", marginRight: "1rem" }}
            />
          </Box>
        )}
        {showReply &&
          replyData.length > 0 &&
          replyData.map((reply) => (
            <Grid
              key={reply._id}
              container
              item
              xs={12}
              sx={{
                padding: "0.5rem 0",
                borderBottom: "1px solid rgba(0,0,0,.1)",
              }}
            >
              <Grid item xs={1}>
                <Avatar alt={reply.name}>{reply.name[0]}</Avatar>
              </Grid>
              <Grid item xs={11}>
                <Stack direction="row" spacing={2}>
                  <Item>
                    <CommentName>{reply.name}</CommentName>
                  </Item>
                  <Item>
                    <CommentInfo isTime>
                      {moment(reply.created_at).fromNow()}
                    </CommentInfo>
                  </Item>
                </Stack>
                <CommentDescription>{reply.comment}</CommentDescription>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
}
