import React from "react";
import Dialog from "@mui/material/Dialog";
import Grow from "@mui/material/Grow";
import NiceModal, { useModal } from "@ebay/nice-modal-react";

import BlockUser from "../Common/BlockUser";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow direction="down" ref={ref} {...props} />;
});

const BlockUserDialog = NiceModal.create(() => {
  const modal = useModal();
  return (
    <Dialog
      open={modal.visible}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => modal.remove()}
      aria-describedby="alert-dialog-slide-description"
    >
      <BlockUser />
    </Dialog>
  );
});

// Use this Action to show the dialog
export const ShowBlockUserDialog = () => {
  NiceModal.show(BlockUserDialog);
};
