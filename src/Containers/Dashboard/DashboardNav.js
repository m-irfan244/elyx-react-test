import React from "react";
import styled from "@mui/system/styled";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Tabs, Tab, Box } from "@mui/material";
import { MyAccountNavSchema } from "./navSchema";
import { UseGlobalContext } from "src/Hooks/globalContext/globalContext";

const CustomTabs = styled(Tabs)(({ theme }) => ({
  "& .MuiTabs-flexContainer": {
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-between",
    },
    "& .MuiButtonBase-root": {
      fontSize: "18px",
      fontWeight: 400,
      [theme.breakpoints.down("md")]: {
        padding: 0,
      },
    },
  },
  "& .MuiTabs-flexContainerVertical": {
    alignItems: "flex-start",
  },
  "& .MuiTabs-indicator": {
    right: "30%",
    [theme.breakpoints.down("lg")]: {
      right: "0",
    },
  },
}));
const CustomTab = styled(Tab)(({ theme }) => ({
  color: "#000",
  fontSize: "22px",
  fontWeight: 600,
  textTransform: "capitalize",
  paddingLeft: 0,
  [theme.breakpoints.down("md")]: {
    margin: "0 10px",
  },
}));

const LogoutBtn = styled("button")(({ theme }) => ({
  display: "inline-flex",
  fontFamily: "Poppins",
  fontSize: "18px",
  fontWeight: 400,
  border: "none",
  backgroundColor: "transparent",
  padding: "10px 5px",
  cursor: "pointer",
  width: "150px",
  // [theme.breakpoints.down("md")]: {
  //   marginLeft: "2rem",
  // },
}));

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function DesktopNavList({ tabValue, setValue }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const { setIsUserLogin } = UseGlobalContext();

  const match = useMediaQuery(theme.breakpoints.down("md"));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLogOut = () => {
    setIsUserLogin(false);
    localStorage.removeItem("loginUser");
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        [theme.breakpoints.up("md")]: { flexDirection: "column" },
      }}
    >
      <CustomTabs
        orientation={match ? "horizontal" : "vertical"}
        onChange={handleChange}
        value={tabValue}
        aria-label="Tabs"
        variant="scrollable"
        scrollButtons={match}
        allowScrollButtonsMobile={match}
        sx={{ flexGrow: 1 }}
      >
        {MyAccountNavSchema.map((list) => (
          <CustomTab key={list.id} label={list.name} {...a11yProps(list.id)} />
        ))}
      </CustomTabs>
      <LogoutBtn onClick={handleLogOut} label="Log out">
        Log out
      </LogoutBtn>
    </Box>
  );
}
