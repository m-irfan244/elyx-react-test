import React from "react";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { CustomContainer } from "src/Components";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const CustomBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.lightGrey,
  height: "60px",
  display: "flex",
  alignItems: "center",
}));

export default function CustomBreadcrubs({ content }) {
  return (
    <CustomBox>
      <CustomContainer>
        <Breadcrumbs separator={<ArrowRightIcon />} aria-label="breadcrumb">
          {content.map((item, index) => {
            return (
              <MuiLink
                key={index + "1"}
                underline="none"
                color={content.length - 1 === index ? "primary" : "inherit"}
                sx={{ textTransform: "capitalize" }}
                component={Link}
                to={
                  index === 0
                    ? "/"
                    : index === content.length - 1
                    ? ""
                    : `/${item}`
                }
              >
                {item}
              </MuiLink>
            );
          })}
        </Breadcrumbs>
      </CustomContainer>
    </CustomBox>
  );
}
