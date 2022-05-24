import React from "react";
import styles from "@mui/system/styled";
import { Container, Typography } from "@mui/material";
import { AboutPage } from "src/constants";
import { CustomSpan, CustomParagraph } from "./Common";

const CustomContainer = styles(Container)(({ theme }) => ({
  maxWidth: "1000px",
  paddingBottom: "3rem",
}));

const sxCustomMargin = {
  margin: "24px 0",
};

export default function HistorySection() {
  return (
    <CustomContainer maxWidth="md">
      <Typography variant="h2" sx={sxCustomMargin}>
        History Of <CustomSpan>ElyX</CustomSpan>
      </Typography>

      <CustomParagraph>{AboutPage.historySection.paragraph1}</CustomParagraph>
      <CustomParagraph>{AboutPage.historySection.paragraph2}</CustomParagraph>
      <CustomParagraph>{AboutPage.historySection.paragraph3}</CustomParagraph>
      <CustomParagraph>{AboutPage.historySection.paragraph4}</CustomParagraph>
      <Typography variant="h2" sx={sxCustomMargin}>
        Car Auctions The Way <CustomSpan>They Should Be Done</CustomSpan>
      </Typography>
      <CustomParagraph>{AboutPage.historySection.paragraph5}</CustomParagraph>
      <CustomParagraph>{AboutPage.historySection.paragraph6}</CustomParagraph>
    </CustomContainer>
  );
}
