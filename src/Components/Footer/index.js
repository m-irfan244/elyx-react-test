import React from "react";
import styles from "@mui/system/styled";
import { Link } from "react-router-dom";
import { ShowSubscribeToEmailDialog } from "../Modals/SubscribeToEmailDialog";

import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { CustomContainer } from "../index";
import elyxLogo from "src/Images/logo-light.svg";
import {
  footerDescription,
  socialIcons,
  footerNavigation,
  contantInfo,
} from "src/constants";

const FooterWrapper = styles("footer")(({ theme }) => ({
  backgroundColor: theme.palette.common.heading,
  color: "white",
  fontFamily: "Poppins",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "19px",
  padding: "3rem 0",
}));

const CustomParagarph = styles("p")(() => ({
  fontFamily: "inherit",
  fontSize: "12.5px",
  fontWeight: 400,
  margin: "1.5rem 0",
}));

const SocialWrapper = styles("div")(() => ({
  "& > *:not(:last-child)": {
    marginRight: "1rem",
  },
}));

const CustomTypography = styles(Typography)(({ theme }) => ({
  margin: "0 1rem 1.5rem 1rem",
  [theme.breakpoints.down("md")]: {
    marginTop: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
}));
const FooterTypography = styles(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontWeight: "400",
  fontSize: "12px",
  borderTop: "1px solid #ffffff1a",
  marginTop: "3.5rem",
  paddingTop: "1rem",
}));

const IconsLink = styles("a")(() => ({
  color: "white",

  "&:visited": {
    color: "white",
  },
}));

const CustomLink = styles(Link)(() => ({
  color: "white",
  "&:visited": {
    color: "white",
  },
}));

export default function Footer() {
  return (
    <FooterWrapper>
      <CustomContainer>
        <Grid container>
          <Grid item xs={12} md={4}>
            <img src={elyxLogo} alt="Elyx" />
            <CustomParagarph>{footerDescription}</CustomParagarph>
            <SocialWrapper>
              {socialIcons.map((item) => (
                <IconsLink key={item.id} href={item.link} target="__blank">
                  {item.component}
                </IconsLink>
              ))}
            </SocialWrapper>
          </Grid>
          <Grid item xs={6} md={4}>
            <CustomTypography variant="h3" color="primary">
              Quick Links
            </CustomTypography>
            <List sx={{ fontSize: "14px" }}>
              {footerNavigation.map((item) => (
                <ListItem key={item.id} component={CustomLink} to={item.to}>
                  {item.name}
                </ListItem>
              ))}
            </List>
            <List sx={{ marginTop: "-1.1rem" ,fontSize: "14px"} }>
              <ListItem key={"as"} component={CustomLink} to="#" onClick={ShowSubscribeToEmailDialog} >
                Get an Email
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6} md={4}>
            <CustomTypography variant="h3" color="primary">
              Contact Us
            </CustomTypography>
            <List>
              {contantInfo.map((item) => (
                <ListItemButton
                  key={item.id}
                  disableRipple
                  component="a"
                  href={item.href}
                  sx={{
                    "&:hover": {
                      background: "none",
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    sx={{ overflowWrap: "break-word" }}
                    primary={item.name}
                    disableTypography
                  />
                </ListItemButton>
              ))}
            </List>
          </Grid>
        </Grid>
        <FooterTypography align="center">
          &copy; Auksjonen.no AS 2021 all rights reserved
        </FooterTypography>
      </CustomContainer>
    </FooterWrapper>
  );
}
