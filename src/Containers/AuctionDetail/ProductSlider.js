import React, { useState } from "react";
import { styled } from "@mui/system";
import { Grid } from "@mui/material";
import { ShowFullScreenImgDialog } from "src/Components/Modals/FullScreenImgDialog";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainImage = styled("img")(() => ({
  height: "100%",
  maxHeight: "800px",
  objectFit: "contain",
  background: "ghostwhite",
  margin: "0 auto",
  display: "block",
  cursor: "pointer",
}));
const ListImageWrapper = styled("img")(() => ({
  height: "100px",
  objectFit: "contain",
  background: "ghostwhite",
  margin: "0 auto",
  display: "block",
  cursor: "pointer",
}));

export default function ProductSlider({ productImages }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [arrowsActive, setArrowsActive] = useState(false);

  return (
    <Grid item xs={12} onMouseLeave={() => setArrowsActive(false)}>
      <Slider
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        dots={false}
        arrows={arrowsActive}
        className="product-slider"
      >
        {productImages.map((item, idx) => (
          <MainImage
            key={idx}
            src={item}
            alt="Car"
            onClick={() => ShowFullScreenImgDialog(productImages, idx)}
            onMouseEnter={() => setArrowsActive(true)}
          />
        ))}
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={productImages.length > 5 ? 5 : productImages.length}
        lazyLoad="ondemand"
        // swipeToSlide={false}
        focusOnSelect={true}
        swipe={false}
        dots={false}
        arrows={false}
      >
        {productImages.map((item, idx) => (
          <ListImageWrapper key={item} src={item} alt="Car" />
        ))}
      </Slider>
    </Grid>
  );
}
