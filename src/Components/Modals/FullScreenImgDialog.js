import React, { useState } from "react";
import { Dialog, Backdrop, Box, Typography } from "@mui/material/";
import Grow from "@mui/material/Grow";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow direction="down" ref={ref} {...props} />;
});

const arrowStyles = {
  position: "absolute",

  color: "white",
  cursor: "pointer",
};

const leftArrowStyle = {
  ...arrowStyles,
  left: "10px",
};
const rightArrowStyle = {
  ...arrowStyles,
  right: "10px",
};

const FullScreenImgDialog = NiceModal.create(({ imageList, idx }) => {
  const modal = useModal();
  const [activeIndex, setActiveIndex] = useState(idx);

  const handleNextImg = (event) => {
    event.stopPropagation();

    setActiveIndex((prevState) =>
      imageList.length - 1 === activeIndex ? 0 : prevState + 1
    );
  };
  const handlePreviousImg = (event) => {
    event.stopPropagation();
    setActiveIndex((prevState) =>
      activeIndex === 0 ? imageList.length - 1 : prevState - 1
    );
  };

  return (
    <Dialog
      open={modal.visible}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => modal.remove()}
      aria-describedby="Full Screen Image Dialog"
      maxWidth="xl"
    >
      <Backdrop
        sx={{ padding: "0 100px" }}
        open={modal.visible}
        onClick={() => modal.remove()}
      >
        <ArrowCircleLeftOutlinedIcon
          sx={leftArrowStyle}
          onClick={handlePreviousImg}
        />
        <Box>
          <img src={imageList[activeIndex]} alt="Car" />
          <Typography sx={{ color: "#ccc", textAlign: "right" }}>
            {`${activeIndex + 1}/${imageList.length}`}
          </Typography>
        </Box>
        <ArrowCircleRightOutlinedIcon
          sx={rightArrowStyle}
          onClick={handleNextImg}
        />
      </Backdrop>
    </Dialog>
  );
});

// Use this Action to show the dialog
export const ShowFullScreenImgDialog = (imageList = [], idx) => {
  NiceModal.show(FullScreenImgDialog, { imageList, idx });
};
