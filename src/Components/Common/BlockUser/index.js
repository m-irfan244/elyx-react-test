import React from "react";
import styled from "@mui/system/styled";
import { Box, Button, Typography } from "@mui/material";
import { CustomBox, CustomParagraph } from "src/Auth/Common";
import CloseButton from "../CloseButton";
import blockLogo from "src/Images/block.svg";

const BlockButton = styled(Button, {
  shouldForwardProp: (props) => props !== "reverse",
})(({ theme, reverse }) => ({
  backgroundColor: reverse ? "white" : "#ea5f00",
  color: reverse ? theme.palette.primary.main : "white",
  border: reverse ? `1px solid ${theme.palette.primary.main}` : undefined,
  "&:hover": {
    backgroundColor: reverse ? theme.palette.primary.main : undefined,
    color: reverse ? "white" : undefined,
  },
  [theme.breakpoints.down("sm")]: {
    width: "140px",
  },
}));

const CustomImg = styled("img")(({ theme }) => ({
  maxHeight: "20em",
  [theme.breakpoints.down("md")]: {
    maxHeight: "15em",
  },
}));

export default function BlockUser() {
  return (
    <CustomBox sx={{ margin: "1.5rem" }}>
      <CloseButton />
      <Box textAlign="center">
        <CustomImg src={blockLogo} alt="Block User" />
      </Box>

      <Typography
        textAlign="center"
        variant="h3"
        sx={{ margin: "1rem", lineHeight: "30px" }}
      >
        Are you sure you want to block this user?
      </Typography>
      <CustomParagraph
        textAlign="center"
        sx={{ margin: "1rem 0 1.5rem 0", padding: "0 2rem" }}
      >
        Blocked users will not be able to post or bid the auctions.
      </CustomParagraph>
      <Box
        textAlign="center"
        sx={{
          "& > *:not(:last-child)": {
            marginRight: "1rem",
          },
        }}
      >
        <BlockButton reverse>Cancel</BlockButton>
        <BlockButton>Block</BlockButton>
      </Box>
    </CustomBox>
  );
}
