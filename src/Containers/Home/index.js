import React, { useEffect, useState } from "react";
import styles from "@mui/system/styled";
import { useQuery } from "react-query";
import useMediaQuery from "@mui/material/useMediaQuery";
import useDocumentTitle from "src/Hooks/useDocumentTitle";
import useFeaturedAuction from "src/Hooks/useFeaturedAuction";
import { useTheme } from "@mui/material/styles";
import { getLatestAuctions } from "src/Api/auth"
import { Link } from "react-router-dom";
import { AuctionsCard } from "src/Components/Common/AuctionCard";
import FeaturedAuction from "src/Components/FeaturedAuction";
import { PreLoader } from "src/Components/Common/Preloader";
import {
  Grid,
  Box,
  Container,
  Typography,
  CircularProgress,
  Divider,
  CardMedia,
  Button,
} from "@mui/material";
import Carousel from "src/Components/Common/Carousel";
import productImg from "src/Images/product-online.png";

const Home = () => {
  useDocumentTitle("Elyx - Home");
  const theme = useTheme();
  const matchLg = useMediaQuery(theme.breakpoints.down("lg"));
  const matchMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchXs = useMediaQuery(theme.breakpoints.down("xs"));
  const [latestAuctions, setLatestAuctions] = useState([]);
  const featuredAuction = useFeaturedAuction();

  const { data: latestAuctionsData, isLoading: isGettingLatestAuctions } = useQuery(["getLatestAuctionsKey"], getLatestAuctions);
  const getCarouselItems = () => {
    return matchXs || matchSm ? 1 : matchMd ? 2 : matchLg ? 3 : 4;
  };

  useEffect(() => {
    let mounted = true
    if (latestAuctionsData?.data) {
      if (mounted) {
        setLatestAuctions(latestAuctionsData?.data?.live_auction);
      }
    }
    return () => {
      mounted = false
    }
  }, [latestAuctionsData?.data]);

  if (featuredAuction.isLoading) return <PreLoader />;
  return (
    <HomeWrapper>
      <FeaturedAuction featuredAuction={featuredAuction?.data?.data} />
      <AuctionsContainer maxWidth="xl">
        <Typography
          mt={8}
          fontWeight={600}
          gutterBottom
          variant="h2"
          color="#353535"
          component="h2"
        >
          Latest Auctions
        </Typography>
        <Divider textAlign="center" flexItem />
        <Grid mt={3} container spacing={2}>
          {isGettingLatestAuctions ? (
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  top: "380px",
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CircularProgress
                  variant="indeterminate"
                  color="primary"
                  disableShrink={isGettingLatestAuctions}
                />
              </Box>
            </Box>
          ) : (
            latestAuctions?.map((item) => {
              return (
                <Grid key={item._id} item xl={3} md={3} sm={6} xs={12}>
                  <AuctionsCard
                    id={item._id}
                    ImageUrl={item?.product_image[0]}
                    totalPrice={item.price}
                    ImageTitle={`${item?.model} ${item?.product_name} ${item?.manufacture} ${item?.engine}`}
                    location={`${item?.location}`}
                    bidEndDate={item.bid_end_date}
                  />
                </Grid>
              );
            })
          )}
        </Grid>
        <Grid mt={3} container>
          <Grid item xl={12} md={12} sm={12} xs={12}>
            <ImageCardWrapper>
              <CardMediaWrapper component="img" image={productImg} alt="alt" />
              <CardContent>
                <Grid container spacing={6}>
                  <Grid item sm={12} md={12} lg={8}>
                    <TypographyTitle
                      mt={3}
                      fontWeight={600}
                      variant="h1"
                      color="#353535"
                      component="h1"
                    >
                      Simply buy your Favourite product online
                    </TypographyTitle>
                    <TypographyWraper
                      marginTop={3}
                      marginBottom={3}
                      fontWeight={600}
                      variant="h4"
                      color="#353535"
                      component="p"
                    >
                      You order your car completely online.
                    </TypographyWraper>
                    <Button
                      color="primary"
                      variant="contained"
                      size="medium"
                      sx={{ marginTop: "1.2rem" }}
                      component={Link}
                      to="/auctions"
                    >
                      PLACE BID
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
              <Grid container spacing={6} mt={10} mb={8}>
                <Grid item sm={12} md={8} lg={8}>
                  <TypographyTitle
                    mt={3}
                    fontWeight={600}
                    variant="h1"
                    color="#353535"
                    component="h1"
                  >
                    the
                    <CustomSpan>Best marketplace</CustomSpan>
                    for All Products
                  </TypographyTitle>
                </Grid>
                <Grid
                  item
                  sm={12}
                  md={6}
                  lg={4}
                  alignItems={"flex-end"}
                  mt={2}
                  display={"flex"}
                  justifyContent={"flex-end"}
                >
                  <Button
                    color="primary"
                    variant="contained"
                    size="medium"
                    component={Link}
                    to="/auctions"
                    sx={{ marginTop: "1.2rem" }}
                  >
                    BROWSE AUCTION
                  </Button>
                </Grid>
              </Grid>
            </ImageCardWrapper>
          </Grid>
        </Grid>
      </AuctionsContainer>
      <Carousel
        slidesToShow={getCarouselItems()}
        title="What our clients say"
        usedOnHome
      />
    </HomeWrapper>
  );
};

// Styles
const HomeWrapper = styles("div")(({ theme }) => ({}));

const AuctionsContainer = styles(Container)(({ theme }) => ({
  padding: "0px 65px !important",
  marginBottom: "96px !important",
}));

const TypographyTitle = styles(Typography)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    fontSize: "25px",
    marginTop: "0px",
  },
}));
const TypographyWraper = styles(Typography)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    fontSize: "18px",
    margin: "10px 0",
  },
}));

const CardMediaWrapper = styles(CardMedia)(({ theme }) => ({
  borderRadius: "36px",
  [theme.breakpoints.down("sm")]: {
    minHeight: "150px",
    objectFit: "cover",
    objectPosition: "right",
    borderRadius: "1em",
  },
}));

const ImageCardWrapper = styles("section")(({ theme }) => ({
  position: "relative",
}));

const CardContent = styles("div")(({ theme }) => ({
  position: "absolute",
  top: "0px",
  padding: "20px 60px",
  [theme.breakpoints.down("md")]: {
    padding: "8px 30px",
    position: "relative",
    fontSize: "20px",
  },
}));

export const CustomSpan = styles("span")(({ theme }) => ({
  color: theme.palette.primary.main,
  margin: "0px 10px",
}));

export default Home;
