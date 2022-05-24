import React from "react";
import { Typography, CardMedia, CardContent, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "@mui/system/styled";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import priceImg from "src/Images/price.png";
import Countdown from "react-countdown";

export const AuctionsCard = ({
  id,
  totalPrice,
  ImageUrl,
  ImageTitle,
  description,
  location,
  bidEndDate,
}) => {
  const navigate = useNavigate();
  return (
    <Card
      style={{
        minHeight: "400px",
        boxShadow: "none",
        cursor: "pointer",
      }}
      onClick={() => navigate(`/auction/${id}`)}
    >
      <ImageWrapper>
        <CardMedia component="img" image={ImageUrl} alt="alt" />

        <TypographyTotalPrice variant="h3" color="#FFFFFF" component="div">
          <PriceTitleWrapper>Bid</PriceTitleWrapper>
          <BidWrapper>${totalPrice || "-"}</BidWrapper>
        </TypographyTotalPrice>
      </ImageWrapper>
      <CardContent>
        <Typography
          gutterBottom
          variant="subtitle1"
          color={"#353535"}
          component="div"
        >
          {ImageTitle}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {location}
        </Typography>
        <TimeCountWrapper>
          <AccessTimeIcon
            className="timeIcon"
            style={{ marginRight: "10px" }}
          />
          <Typography variant="body1">
            <Countdown date={bidEndDate} />
          </Typography>
        </TimeCountWrapper>
      </CardContent>
    </Card>
  );
};

// Styles

const TypographyTotalPrice = styles(Typography)(({ theme }) => ({
  position: "absolute",
  width: "135px",
  height: "40px",
  display: "grid",
  backgroundImage: `url(${priceImg})`,
  alignItems: "end",
  padding: "10px 18px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  bottom: "0",
  // [theme.breakpoints.down("md")]: {
  //   width: "110px",
  //   padding: "5px 8px",
  //   height: "30px",
  // },
}));

const PriceTitleWrapper = styles("p")(({ theme }) => ({
  margin: "0px",
  fontSize: "12px",
  fontWeight: 600,
  fontFamily: "Poppins",
  [theme.breakpoints.down("md")]: {
    // paddingLeft: "0px"
  },
}));
const BidWrapper = styles("span")(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 600,
  fontFamily: "Poppins",
  textTransform: "none",
  [theme.breakpoints.down("md")]: {
    // paddingLeft: "0px"
  },
}));

const ImageWrapper = styles("div")(({ theme }) => ({
  position: "relative",
}));

const TimeCountWrapper = styles("div")(({ theme }) => ({
  display: "flex",
  marginTop: "10px",
  alignItems: "center",
}));
