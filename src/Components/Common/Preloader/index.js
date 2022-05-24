import React from "react";
import { CardMedia } from "@mui/material";
import imageLoader from "src/Images/logo.svg";

export const PreLoader = () => {
  return (
    <div className="preloader">
      <div id="mdiv">
        <div className="circle">
          <div className="border"></div>
          <CardMedia component="img" image={imageLoader} alt="alt" />
        </div>
      </div>
    </div>
  );
};
