import React from "react";
import styles from "@mui/system/styled";
import { Alert } from "@mui/material";

export const CustomAlert = styles(Alert)(({ theme }) => ({
  position: "fixed",
  top: "20px",
  zIndex: "9999",
  left: "46%",
}));

export const NotificationAlertWrapper = styles('div')(({ theme }) => ({
  position: "relative",
  alignItems: "center",
  display: "inline-table",
  justifyContent: "center",
  width: "100%"
}));

export const NotificationAlert = ({ type, info, onClose }) => {
  return (
    <NotificationAlertWrapper>
      <CustomAlert onClose={onClose} severity={type}>
        {info}
      </CustomAlert>
    </NotificationAlertWrapper>
  );
};
