import React from "react";
import styled from "@mui/system/styled";
import { Box, Button, Typography, Dialog } from "@mui/material";
import { CustomBox } from "src/Components/Common/Auth/Common";

const BlockButton = styled(Button, {
  shouldForwardProp: (props) => props !== "reverse",
})(({ theme, reverse }) => ({
  backgroundColor: reverse ? "white" : theme.palette.primary.main,
  color: reverse ? theme.palette.primary.main : "white",
  border: reverse ? `1px solid ${theme.palette.primary.main}` : undefined,
  "&:hover": {
    backgroundColor: reverse ? theme.palette.common.lightGrey : undefined,
    // color: reverse ? "black" : undefined,
  },
  [theme.breakpoints.down("sm")]: {
    width: "140px",
  },
}));

export default function ConfirmDialog(props) {
  const { open, onClose, onConfirm, message } = props;

  return (
    <Dialog onClose={() => onClose()} open={open}>
      <CustomBox sx={{ margin: "1.5rem" }}>
        <Typography
          textAlign="center"
          variant="h3"
          sx={{ margin: "1rem", lineHeight: "30px", textTransform: "none" }}
        >
          {message}
        </Typography>
        {/* <CustomParagraph
          textAlign="center"
          sx={{ margin: "1rem 0 1.5rem 0", padding: "0 2rem" }}
        >
          Blocked users will not be able to post or bid the auctions.
        </CustomParagraph> */}
        <Box
          textAlign="center"
          sx={{
            "& > *:not(:last-child)": {
              marginRight: "1rem",
            },
          }}
        >
          <BlockButton onClick={() => onClose()} reverse>
            Cancel
          </BlockButton>
          <BlockButton
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            Confirm
          </BlockButton>
        </Box>
      </CustomBox>
    </Dialog>
  );
}
