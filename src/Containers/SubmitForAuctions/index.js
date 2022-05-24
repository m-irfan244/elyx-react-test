import React, { useState } from "react";
import styled from "@mui/system/styled";
import useDocumentTitle from "src/Hooks/useDocumentTitle";
import { useTheme } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import { CustomContainer } from "src/Components";
import Navigation from "./Navigation";
import AuctionForm from "./AuctionForm";
import ProductBanner from "src/Components/Common/ProductBanner";

const CustomParagraph = styled("p")(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "1.2rem",
  fontWeight: 400,
  lineHeight: "35px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
}));

const SubmitForAuction = () => {
  useDocumentTitle("Elyx - Submit for Auction");
  const theme = useTheme();
  const [value, setValue] = useState(0);

  return (
    <CustomContainer
      sx={{ [theme.breakpoints.up("md")]: { padding: "3rem 0" } }}
    >
      <Grid container justifyContent="center" sx={{ marginBottom: "3rem" }}>
        <Grid item xs={12} md={2}>
          <Navigation tabValue={value} setValue={setValue} />
        </Grid>
        <Grid
          item
          xs={10}
          sx={{
            [theme.breakpoints.down("sm")]: {
              maxWidth: "95%",
              flexBasis: "100%",
            },
          }}
        >
          <Typography variant="h1">Tell us about your Products</Typography>
          <CustomParagraph>
            Please give us some basics about yourself and the car you’d like to
            sell. We’ll also need details about the car’s title status as well
            as 12 photos that highlight the car’s exterior and interior
            condition.
          </CustomParagraph>
          <CustomParagraph>
            We’ll respond to your application within a business day. Once
            accepted, we’ll ask for more details and at least 50 high-res
            photos, collect our listing fee, and work with you to build a custom
            and professional listing and get the auction live.
          </CustomParagraph>
          <AuctionForm />
        </Grid>
      </Grid>
      <ProductBanner />
    </CustomContainer>
  );
};

export default SubmitForAuction;
