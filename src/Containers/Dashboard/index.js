import React, { useState } from "react";
import styled from "@mui/system/styled";
import useDocumentTitle from "src/Hooks/useDocumentTitle";
import { useTheme } from "@mui/material/styles";
import { CustomContainer } from "src/Components/index";
import { Grid } from "@mui/material";
import DesktopNavList from "./DashboardNav";
import TabPanel from "src/Components/Common/TabPanel";

// Views
// import ManageUsers from "./ManageUsers";
// import ManageAuctions from "./ManageAuctions";
import MyAccount from "./MyAccount";
import MyListing from "./MyListing";
import MyBids from "./MyBids";

const CustomSubtitle = styled("h4")(() => ({
  fontFamily: "Poppins",
  fontSize: "18px",
  fontWeight: 400,
  color: "#9A9A9A",
  textTransform: "uppercase",
}));

export default function Dashboard() {
  useDocumentTitle("Elyx - Dashboard");

  const theme = useTheme();
  const [value, setValue] = useState(0);

  return (
    <div>
      <CustomContainer
        sx={{
          padding: "3rem 0",
          // [theme.breakpoints.down("md")]: { maxWidth: "90%" },
        }}
      >
        <Grid container>
          <Grid
            item
            sm={12}
            md={3}
            sx={{
              marginTop: "3.8rem",
              paddingTop: "2rem",
              [theme.breakpoints.down("md")]: {
                padding: 0,
                margin: "0 10px",
                width: "100%",
              },
            }}
          >
            <CustomSubtitle>Account Info</CustomSubtitle>
            <DesktopNavList tabValue={value} setValue={setValue} />
          </Grid>
          <Grid item sm={12} md={9}>
            {/* <TabPanel value={value} index={0}>
              <ManageUsers />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ManageAuctions />
            </TabPanel> */}
            <TabPanel value={value} index={0}>
              <MyAccount />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <MyListing />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <MyBids />
            </TabPanel>
          </Grid>
        </Grid>
      </CustomContainer>
    </div>
  );
}
