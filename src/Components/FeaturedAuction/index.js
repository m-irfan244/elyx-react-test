import { Typography, Grid, Container, CardMedia, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "@mui/system/styled";
import Countdown from "react-countdown";
import FACountdownClock from "../FACountdownClock";

const FeaturedAuction = ({ featuredAuction }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (!completed) {
      return (
        <FACountdownClock
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      );
    } else {
      return (
        // This should not be an option from the BE
        <Typography variant="h4" color="white">
          This Auction has expired
        </Typography>
      );
    }
  };

  return (
    <SectionWrapper>
      <HomeWrapper maxWidth="xl">
        <BannerWrapper>
          <div className="single_slide">
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Typography
                  variant="h1"
                  component="h2"
                  color="#ffff"
                  mb={"0.5rem"}
                  sx={{ fontSize: { xs: "35px", md: "45px" } }}
                >
                  {`${featuredAuction?.model} ${featuredAuction?.product_name}`}
                </Typography>
                <Typography
                  variant="h4"
                  component="p"
                  mt="1rem"
                  mb="1.75em"
                  color="#ffff"
                >
                  {featuredAuction?.product_description.replace(/<[^>]+>/g, '')}
                </Typography>
                <CountHeadWrapper>
                  <Grid container spacing={2}>
                    <Grid item md={6}>
                      <PriceTitleWraper>
                        <Typography variant="h4" component="p" color="white">
                          Current bid :
                        </Typography>
                        <PriceNumberWraper>
                          <Typography
                            variant="h4"
                            fontWeight={700}
                            component="p"
                            color="primary"
                            fontSize={"1.75em"}
                            mt={1}
                            mb={3}
                          >
                            $ {featuredAuction.price || "-"}
                          </Typography>
                        </PriceNumberWraper>
                      </PriceTitleWraper>
                    </Grid>
                    <Grid item md={6}>
                      <PriceTitleWraper>
                        <Typography variant="h4" component="p" color="white">
                          City :
                        </Typography>
                        <PriceNumberWraper>
                          <Typography
                            variant="h4"
                            fontWeight={700}
                            fontSize={"1.75em"}
                            component="p"
                            color="primary"
                            mt={1}
                            mb={3}
                          >
                            {featuredAuction?.product_location}
                          </Typography>
                        </PriceNumberWraper>
                      </PriceTitleWraper>
                    </Grid>
                  </Grid>
                </CountHeadWrapper>
                <Countdown
                  date={featuredAuction.bid_end_date}
                  renderer={renderer}
                />
                <Button
                  color="primary"
                  variant="contained"
                  size="medium"
                  sx={{ marginTop: "1.2rem" }}
                  component={Link}
                  to={"/auction/" + featuredAuction._id}
                >
                  PLACE BID
                </Button>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <ImageWraper
                  component="img"
                  image={featuredAuction.product_image[0]}
                  alt="alt"
                />
              </Grid>
            </Grid>
          </div>
        </BannerWrapper>
      </HomeWrapper>
    </SectionWrapper>
  );
};

export default FeaturedAuction;

// Styles
const SectionWrapper = styles("section")(({ theme }) => ({
  marginTop: "104px",
  background: `linear-gradient(
270deg, #0c50ca 32%, #353535 32%)`,
  padding: "4.375em 0 2rem 0",
}));

const ImageWraper = styles(CardMedia)(({ theme }) => ({
  border: "15px solid #ffffff36",
  width: "90%",
  maxWidth: "500px",
}));

const BannerWrapper = styles("div")(({ theme }) => ({
  marginBottom: "30px ",
}));

const HomeWrapper = styles(Container)(({ theme }) => ({
  padding: "0px 55px !important",
}));

const CountHeadWrapper = styles("div")(({ theme }) => ({
  maxWidth: "65%",
  // display: "flex",
  // justifyContent: "space-between",
}));

const PriceTitleWraper = styles("div")(({ theme }) => ({}));

const PriceNumberWraper = styles("span")(({ theme }) => ({}));
