import React from "react";
import { Box, InputAdornment, OutlinedInput } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LoadingButton from "@mui/lab/LoadingButton";

export default function PostAction({
  data,
  setData,
  name,
  placeholder,
  onPostClick,
  loading,
  disabled,
}) {
  const handleInputChange = (event) => {
    if (name === "post") {
      setData(event.target.value);
    } else {
      // This only allows numbers in the input
      setData(event.target.value.replace(/\D/, ""));
    }
  };

  const handlePostClick = () => {
    onPostClick();
  };

  return (
    <Box
      sx={{
        display: "flex",
        padding: "1rem",
        backgroundColor: "common.lightGrey",
      }}
    >
      <OutlinedInput
        size="small"
        fullWidth
        name={name}
        value={data}
        onChange={handleInputChange}
        endAdornment={
          <InputAdornment position="end">
            {name === "post" ? (
              <ForumIcon
                aria-label="Add a comment"
                edge="end"
                color="primary"
              />
            ) : (
              <MonetizationOnIcon
                aria-label="Place a bid"
                edge="end"
                color="primary"
              />
            )}
          </InputAdornment>
        }
        placeholder={placeholder}
        sx={{ backgroundColor: "white", marginRight: "1rem" }}
      />
      <LoadingButton
        color="primary"
        variant="contained"
        onClick={handlePostClick}
        loading={loading}
        disabled={disabled}
      >
        Post
      </LoadingButton>
    </Box>
  );
}
