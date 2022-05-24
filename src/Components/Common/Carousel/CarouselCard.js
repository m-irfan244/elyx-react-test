import React from "react";
import styles from "@mui/system/styled";
import { Avatar, Box, Typography, Card } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const CustomCard = styles(Card, {
  shouldForwardProp: (prop) => prop !== "usedOnHome",
})(({ theme, usedOnHome }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: usedOnHome ? "2.5em 2em" : "2.5em 5em",
  margin: "0 0.8rem",
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "none",
  height: usedOnHome ? "210px" : null,
  // width: "800px",
  [theme.breakpoints.down("md")]: {
    padding: "2em",
  },
}));

const CustomParagraph = styles("p")(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "11.8px",
  fontWeight: 400,
  lineHeight: "17.8px",

  flexGrow: 1,
}));

const ratingArray = [1, 2, 3, 4, 5];

export default function CarouselCard({ slide, usedOnHome }) {
  return (
    <CustomCard align="center" usedOnHome={usedOnHome}>
      <Avatar src={slide.image} alt={slide.name} />
      <Typography variant="h6" sx={{ marginTop: "1rem" }}>
        {slide.name}
      </Typography>
      <CustomParagraph>{slide.testimonial}</CustomParagraph>
      <Box>
        {ratingArray.map((item) =>
          item <= slide.rating ? (
            <StarIcon key={item} color="primary" fontSize="small" />
          ) : (
            <StarBorderIcon key={item} fontSize="small" />
          )
        )}
      </Box>
    </CustomCard>
  );
}
