import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function MylistingSkeleton() {
  const theme = useTheme();
  const matchMD = useMediaQuery(theme.breakpoints.down("md"));
  const skeletonStyle = {
    marginBottom: "10px",
    "& span": {
      backgroundColor: "#F8F8FF",
    },
  };
  return (
    <Stack spacing={1} sx={skeletonStyle}>
      <Skeleton variant="rectangular" height={matchMD ? 130 : 110} />
    </Stack>
  );
}
