import React from "react";
import styled from "@mui/system/styled";
import { Tabs, Tab, Link, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import submitAuctionNavSchema from "./navSchema";

const CustomTab = styled(Tab)(() => ({
  color: "#000",
  fontSize: "16px",
  fontWeight: 400,
  textTransform: "capitalize",
  textAlign: "left",
}));

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Navigation({ tabValue, setValue }) {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      orientation={match ? "horizontal" : "vertical"}
      variant="scrollable"
      value={tabValue}
      onChange={handleChange}
      aria-label="Vertical tabs example"
      sx={{
        "& .MuiTabs-flexContainer": { alignItems: "flex-start" },
        marginTop: "4.5rem",
        [theme.breakpoints.down("md")]: {
          marginTop: 0,
          marginBottom: "2rem",
        },
      }}
      TabIndicatorProps={{
        style: {
          display: "none",
        },
      }}
    >
      {submitAuctionNavSchema.map((item) => (
        <CustomTab
          key={item.id}
          label={item.label}
          {...a11yProps(item.id)}
          component={Link}
          href={item.to}
          disableRipple
        />
      ))}
    </Tabs>
  );
}
