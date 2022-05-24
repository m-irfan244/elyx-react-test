import React, { lazy, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "../Components/Header/Index";
import Footer from "../Components/Footer";
import styles from "@mui/system/styled";

import Home from "src/Containers/Home";
import Auctions from "src/Containers/Auctions";
import About from "src/Containers/About";
import AuctionDetail from "src/Containers/AuctionDetail";
import ErrorPage from "src/Components/ErrorPage";
// import SubmitForAuction from "src/Containers/SubmitForAuctions";
// import Dashboard from "src/Containers/Dashboard";

// const Home = lazy(() => import("src/Containers/Home"));
// const Auctions = lazy(() => import("src/Containers/Auctions"));
// const AuctionDetail = lazy(() => import("src/Containers/AuctionDetail"));
// const About = lazy(() => import("src/Containers/About"));
const SubmitForAuction = lazy(() => import("src/Containers/SubmitForAuctions"));
const Dashboard = lazy(() => import("src/Containers/Dashboard"));

const AppRouteWrapper = styles("div")(({ theme }) => ({
  marginTop: "104px",
}));

export const DefaultLayout = (props) => {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AppRouteWrapper>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/auction/:auctionId" element={<AuctionDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/submit_for_auction" element={<SubmitForAuction />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/404" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </AppRouteWrapper>
  );
};
