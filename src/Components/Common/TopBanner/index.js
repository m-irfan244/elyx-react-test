import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import { CustomContainer } from "src/Components";
import bannerBackground from "src/Images/listing_bg.png";

const BannerWrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.common.lightGrey,
  backgroundImage: `url(${bannerBackground})`,
  padding: "2.5em 0",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPositionX: "50%",
  backgroundPositionY: "100%",
}));

const BannerTitle = styled("h1")(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "40px",
  fontWeight: 700,
  lineHeight: "48px",
  textAlign: "left",
  textTransform: "capitalize",
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
    lineHeight: "35px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
}));

const CustomSpan = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export default function TopBanner() {
  return (
    <BannerWrapper>
      <CustomContainer sx={{ display: "flex", flexWrap: "wrap" }}>
        <Box sx={{ minWidth: "50%", flex: "0 0 50%" }}>
          <BannerTitle>
            Simply buy <CustomSpan>your Favourite</CustomSpan> product online
          </BannerTitle>
          <Typography paragraph>
            You order your car completely online.
          </Typography>
        </Box>
      </CustomContainer>
    </BannerWrapper>
  );
}
