import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import Grow from "@mui/material/Grow";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import SwipeableViews from "react-swipeable-views";
import TabPanel from "../Common/TabPanel";
import ChangePassword from "../Common/Auth/ChangePassword";
import ForgotPassword from "../Common/Auth/ForgotPassword";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow direction="down" ref={ref} {...props} />;
});

const ChangePasswordDialog = NiceModal.create(() => {
  const theme = useTheme();
  const modal = useModal();
  const [value, setValue] = useState(0);

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Dialog
      open={modal.visible}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => modal.remove()}
      aria-describedby="alert-dialog-slide-description"
    >
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <ChangePassword handleChangeIndex={handleChangeIndex} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ForgotPassword />
        </TabPanel>
      </SwipeableViews>
    </Dialog>
  );
});

// Use this Action to show the dialog
export const ShowChangePasswordDialog = () => {
  NiceModal.show(ChangePasswordDialog);
};
