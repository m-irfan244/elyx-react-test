import React from "react";
import { Typography } from "@mui/material";
import styles from "@mui/system/styled";

import { carouselElements } from "src/constants";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarouselCard from "./CarouselCard";

const TestemonialsWrapper = styles("section")(({ theme }) => ({
  backgroundColor: theme.palette.common.lightGrey,
  padding: "3em 0",
}));

const CustomContainer = styles("div", {
  shouldForwardProp: (prop) => prop !== "usedOnHome",
})(({ theme, usedOnHome }) => ({
  maxWidth: usedOnHome ? "75%" : "50%",
  margin: "0 auto",

  [theme.breakpoints.down("md")]: {
    maxWidth: "80%",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "70%",
  },
}));

const CustomTypography = styles(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.75em",
  marginBottom: "1.5rem",
}));

export default function CustomCarousel({ slidesToShow, usedOnHome, title }) {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <TestemonialsWrapper>
      <CustomContainer usedOnHome={usedOnHome}>
        <CustomTypography variant="h2" align="center">
          {title}
        </CustomTypography>
        <Slider {...carouselSettings} className="slick-testemonials">
          {carouselElements.map((slide, index) => (
            <CarouselCard
              key={index + Math.random()}
              slide={slide}
              usedOnHome={usedOnHome}
            />
          ))}
        </Slider>
      </CustomContainer>
    </TestemonialsWrapper>
  );
}
