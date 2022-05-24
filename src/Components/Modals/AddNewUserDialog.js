import React from "react";
import Dialog from "@mui/material/Dialog";
import Grow from "@mui/material/Grow";
import NiceModal, { useModal } from "@ebay/nice-modal-react";

import AddNewUser from "../Common/Auth/AddNewUser";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow direction="down" ref={ref} {...props} />;
});

const AddNewUserDialog = NiceModal.create(() => {
  const modal = useModal();
  return (
    <Dialog
      open={modal.visible}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => modal.remove()}
      aria-describedby="alert-dialog-slide-description"
    >
      <AddNewUser />
    </Dialog>
  );
});

// Use this Action to show the dialog
export const ShowAddNewUserDialog = () => {
  NiceModal.show(AddNewUserDialog);
};
