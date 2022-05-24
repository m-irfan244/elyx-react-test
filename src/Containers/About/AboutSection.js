import React from "react";
import styles from "@mui/system/styled";
import { Container, Grid, Typography, Button } from "@mui/material";
import { CustomSpan, CustomParagraph } from "./Common";
import aboutImage from "src/Images/about.jpg";

import { AboutPage } from "src/constants";

const AboutWrapper = styles("section")(({ theme }) => ({
  backgroundImage: `url(${aboutImage})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right top",
  backgroundSize: "48vw",
  [theme.breakpoints.down("md")]: {
    backgroundPosition: "top center",
    backgroundSize: "25em",
    paddingTop: "12em",
    marginTop: "1em",
  },
}));
const CustomGrid = styles(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    paddingBottom: "2.5rem",
  },
}));

const sxCustomMargin = {
  marginBottom: "24px",
};

export default function AboutSection() {
  return (
    <AboutWrapper>
      <Container>
        <Grid container>
          <CustomGrid item md={6} sx={{ padding: "148px 0" }}>
            <Typography variant="h1" sx={sxCustomMargin}>
              About <CustomSpan>ElyX</CustomSpan>
            </Typography>
            <CustomParagraph>
              {AboutPage.aboutSection.paragraph1}
            </CustomParagraph>
            <CustomParagraph>
              {AboutPage.aboutSection.paragraph2}
            </CustomParagraph>
            <Button
              color="primary"
              variant="contained"
              size="medium"
              sx={{ marginTop: "1.2rem" }}
            >
              Browse Auctions
            </Button>
          </CustomGrid>
        </Grid>
      </Container>
    </AboutWrapper>
  );
}
