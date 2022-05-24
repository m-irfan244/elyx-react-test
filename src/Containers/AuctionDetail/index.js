import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import CustomBreadcrubs from "src/Components/Common/CustomBreadcrubs";
import { CustomContainer } from "src/Components";
import useAuctionDetails from "src/Hooks/useAuctionDetails";
import useDocumentTitle from "src/Hooks/useDocumentTitle";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import DOMPurify from "dompurify";
import AuctionDetailsHeader from "./AuctionDetailsHeader/AuctionDetailsHeader";
import ProductSlider from "./ProductSlider";
import ItemInfoBlock from "./ItemInfoBlock";
import DetailsWrapper from "./DetailsWrapper";
import BidOnThisListing from "./BidOnThisListing";
import ProductBanner from "src/Components/Common/ProductBanner";
import BidStats from "./BidStats/BidStats";
import CurrentBidCard from "./CurrentBidCard";
import FaqSection from "./FaqSection";
import CommentsAndBids from "./CommentsAndBids/CommentsAndBids";
import { PreLoader } from "src/Components/Common/Preloader";
import ErrorPage from "src/Components/ErrorPage";
import useAuctionStats from "src/Hooks/useAuctionStats";

export default function AuctionDetail() {
  useDocumentTitle("Elyx - Auction Details");
  const { auctionId } = useParams();
  const [data, isLoading, isFetching, isError] = useAuctionDetails(auctionId); //eslint-disable-line
  const { data: statsData, isLoading: isStatsLoading } =
    useAuctionStats(auctionId);

  const auctionDetails = data?.data?.data[0];
  const auctionStats = statsData?.data.data;

  const featuresArray = [
    {
      id: uuidv4(),
      name: "Make",
      value: auctionDetails?.manufacture,
    },
    {
      id: uuidv4(),
      name: "Engine",
      value: auctionDetails?.engine,
    },
    {
      id: uuidv4(),
      name: "Model",
      value: auctionDetails?.model,
    },
    {
      id: uuidv4(),
      name: "Drivetrain",
      value: auctionDetails?.drivetrain,
    },
    {
      id: uuidv4(),
      name: "Transmission",
      value: auctionDetails?.transmission,
    },
    {
      id: uuidv4(),
      name: "Location",
      value: auctionDetails?.location,
    },
    {
      id: uuidv4(),
      name: "Exterior Color",
      value: auctionDetails?.exterior_color,
    },
    {
      id: uuidv4(),
      name: "VIN",
      value: auctionDetails?.vin,
    },
    {
      id: uuidv4(),
      name: "Interior Color",
      value: auctionDetails?.interior_color,
    },
    {
      id: uuidv4(),
      name: "Mileage",
      value: auctionDetails?.mileage,
    },
    {
      id: uuidv4(),
      name: "Title Status",
      value: auctionDetails?.title_status,
    },
    {
      id: uuidv4(),
      name: "Body Style",
      value: auctionDetails?.body_style,
    },
  ];

  const cleanDescription = DOMPurify.sanitize(
    auctionDetails?.product_description
  );
  const cleanHighlights = DOMPurify.sanitize(auctionDetails?.product_hilights);
  const cleanModifications = DOMPurify.sanitize(auctionDetails?.modifications);
  const cleanServiceHistory = DOMPurify.sanitize(
    auctionDetails?.service_history
  );

  if (isError) {
    return <ErrorPage />;
  }

  if (isLoading || isStatsLoading) {
    return <PreLoader />;
  }

  return (
    <Fragment>
      <CustomBreadcrubs
        content={[
          "Home",
          "Auctions",
          `${auctionDetails?.model} ${auctionDetails?.product_name}`,
        ]}
      />
      <CustomContainer>
        <Grid container sx={{ marginBottom: "5rem" }} columnSpacing={4}>
          <AuctionDetailsHeader
            title={`${auctionDetails?.model} ${auctionDetails?.product_name}`}
            minimumPrice={auctionDetails?.minimum_price}
            feature={auctionDetails?.feature}
          />
          <Grid container item xs={12} md={6} marginTop={2}>
            <ProductSlider
              productImages={auctionDetails?.product_image || []}
            />
            <Grid container item xs={12} my={2}>
              {featuresArray.map((item) => (
                <ItemInfoBlock
                  key={item.id}
                  name={item.name}
                  value={item.value}
                  xsValue={12}
                  mdValue={6}
                  nameWidth="50%"
                  valueWidth="50%"
                />
              ))}
            </Grid>

            <Grid item xs={12}>
              <Typography
                sx={{
                  fontWeight: 400,
                  lineHeight: "24px",
                  fontSize: "16px",
                  marginTop: "1rem",
                }}
                dangerouslySetInnerHTML={{ __html: cleanDescription }}
              />
            </Grid>

            <DetailsWrapper title="Highlights" htmlData={cleanHighlights} />
            <DetailsWrapper
              title="Modifications"
              htmlData={cleanModifications}
            />
            <DetailsWrapper
              title="Recent Service History"
              htmlData={cleanServiceHistory}
            />
            <Grid item xs={12}>
              <BidOnThisListing
                currentBid={
                  auctionStats.highest_bid?.price === ""
                    ? "N/A"
                    : `USD $${auctionStats.highest_bid?.price} by ${auctionStats.highest_bid?.name}`
                }
                // currentBid={`USD $${auctionStats.highest_bid?.price} by ${auctionStats.highest_bid?.name}`}
                timeLeft={auctionDetails?.bid_end_date}
                endsOn={moment(auctionDetails?.bid_end_date).format(
                  "dddd, MMMM M [at] HH:mm A"
                )}
                bids={auctionStats.NumOf?.numOfBids}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} marginTop={2} sx={{ height: "100vh" }}>
            <BidStats
              timeLeft={auctionDetails?.bid_end_date}
              highestBid={auctionStats.highest_bid?.price}
              bidsTotal={auctionStats.NumOf?.numOfBids}
              commentsTotal={auctionStats.NumOf?.NumOfComment}
            />

            <CurrentBidCard
              bidPrice={auctionStats.highest_bid?.price}
              highestBidder={auctionStats.highest_bid?.name}
              seller={auctionStats["seller:"]?.name}
              bidsTotal={auctionStats.NumOf?.numOfBids}
            />
            <div id="place_bid" />
            <FaqSection />
            <CommentsAndBids
              bidEndDate={auctionDetails?.bid_end_date || true}
            />
          </Grid>
        </Grid>
        <ProductBanner />
      </CustomContainer>
    </Fragment>
  );
}
