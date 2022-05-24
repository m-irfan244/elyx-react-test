import React, { Fragment } from "react";
import useDocumentTitle from "src/Hooks/useDocumentTitle";
import CustomBreadcrubs from "src/Components/Common/CustomBreadcrubs";
import AboutSection from "./AboutSection";
import HistorySection from "./HistorySection";
import CustomCarousel from "src/Components/Common/Carousel";

const About = () => {
  useDocumentTitle("Elyx - About");
  return (
    <Fragment>
      <CustomBreadcrubs content={["Home", "about"]} />
      <AboutSection />
      <HistorySection />
      <CustomCarousel slidesToShow={1} title="Client Testimonials" />
    </Fragment>
  );
};

export default About;
