import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Button,
  Menu,
  Container,
  Avatar,
  Tooltip,
  Box,
  Typography,
} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { ShowSignInSignUpDialog } from "../Modals/SignInSignUpDialog";
import { ShowSubscribeToEmailDialog } from "../Modals/SubscribeToEmailDialog";
import ElyxButton from "../Common/ElyxButton.js/ElyxButton";
import { Link, NavLink } from "react-router-dom";
import styles from "@mui/system/styled";
import MenuIcon from "@mui/icons-material/Menu";
import logoPng from "src/Images/Logo.png";
import { TopHeaderRoutingSchema } from "./routeSchema";
import { UseGlobalContext } from "src/Hooks/globalContext/globalContext";

const settings = ["Profile", "Logout"];

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export const Header = () => {
  const { isUserLogin, setIsUserLogin } = UseGlobalContext();
  const navigate = useNavigate();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const [anchorElUser, setAnchorElUser] = React.useState(false);
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (type) => {
    if (type === "Profile") {
      navigate("/dashboard");
    } else {
      setIsUserLogin(false);
      localStorage.removeItem("loginUser");
      navigate("/");
    }
    setAnchorElUser(false);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const displayDesktop = () => {
    return (
      <ToolbarWrapper>
        {headerlogo}
        <div>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
            alignItems="center"
          >
            {getMenuButtons()}
            <Link
              to="#"
              className="mainlink"
              onClick={ShowSubscribeToEmailDialog}
            >
              Get the Email
            </Link>
            {
              // User Login Base wel will control rendering
              isUserLogin ? (
                <Box sx={{ flexGrow: 0 }} style={{ marginLeft: "20px" }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src={logoPng} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting, index) => (
                      <MenuItem
                        key={index}
                        onClick={() => handleCloseNavMenu(setting)}
                      >
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <ElyxButton onClick={ShowSignInSignUpDialog} maxWidth="200px">
                  Login / Signup
                </ElyxButton>
              )
            }
          </Box>
        </div>
      </ToolbarWrapper>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon color="action" />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <DrawerContainerWrapper>
            <Box>
              <Box marginBottom={4}>{headerlogo}</Box>
              {getDrawerChoices()}
            </Box>
            {
              // User Login Base wel will control rendering
              isUserLogin ? (
                <Box sx={{ flexGrow: 0 }} style={{ marginLeft: "20px" }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src={logoPng} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting, index) => (
                      <MenuItem
                        key={index}
                        onClick={() => handleCloseNavMenu(settings)}
                      >
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Button
                  fontWeight={600}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    handleDrawerClose();
                    ShowSignInSignUpDialog();
                  }}
                >
                  Login / Signup
                </Button>
              )
            }
          </DrawerContainerWrapper>
        </Drawer>
        <div>{headerlogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return TopHeaderRoutingSchema.map(({ route, tag, key, icon }) => {
      return (
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            marginTop: "10px",
          }}
          to={route}
          key={key}
          onClick={() =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }))
          }
        >
          <MenuItem>
            <ListItemIcon sx={{ color: "black" }}>{icon}</ListItemIcon>
            <ListItemText>{tag}</ListItemText>
          </MenuItem>
        </Link>
      );
    });
  };

  const headerlogo = (
    <img className="logo" src={logoPng} alt={"logo"} loading="lazy" />
  );

  const getMenuButtons = () => {
    return TopHeaderRoutingSchema.map(({ tag, route, key }) => {
      return (
        <NavLink
          className={({ isActive }) => (isActive ? "activeLink" : "mainlink")}
          to={route}
          key={key}
        >
          {tag}
        </NavLink>
      );
    });
  };

  return (
    <TopHeaderWrapper>
      <ElevationScroll>
        <AppBarWrapper>
          <ContainerWrapper maxWidth="xl" fixed>
            {mobileView ? displayMobile() : displayDesktop()}
          </ContainerWrapper>
        </AppBarWrapper>
      </ElevationScroll>
    </TopHeaderWrapper>
  );
};

// Header Styles

const AppBarWrapper = styles(AppBar)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  position: "fixed",
  width: "100%",
  zIndex: "999",
  padding: "1.25em 0",
  background: "#fff",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "0px",
  },
}));

const ContainerWrapper = styles(Container)(({ theme }) => ({
  // maxWidth: "1200px",
  maxWidth: "75%",

  [theme.breakpoints.down("xl")]: {
    maxWidth: "95%",
  },
}));

const ToolbarWrapper = styles(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  background: "#fff",
}));

const DrawerContainerWrapper = styles("div")(({ theme }) => ({
  padding: "20px 30px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const TopHeaderWrapper = styles("div")(({ theme }) => ({}));
