import React, { useContext } from "react";
import { AuctionListingCtx } from "src/Context/AuctionListingContext";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import { Grid } from "@mui/material";

export default function ItemLayout({ children }) {
  const [{ listView }] = useContext(AuctionListingCtx);
  const theme = useTheme();
  const matchMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));

  const getLayout = (view) => {
    if (view === "grid") {
      return matchSM ? 12 : matchMD ? 6 : 4;
    } else {
      return matchMD ? 12 : 6;
    }
  };
  return (
    <Grid
      item
      xs={getLayout(listView)}
      sx={{
        "& a": {
          textDecoration: "none",
          color: "black",
        },
      }}
    >
      {children}
    </Grid>
  );
}
