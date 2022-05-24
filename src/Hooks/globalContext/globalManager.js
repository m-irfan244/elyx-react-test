import React, { useEffect, useState } from "react";
import { NotificationAlert } from "src/Components/Common/NotificationAlert";
import { DecriptionData } from "src/Utils/encription";
import { GlobalContext } from "./globalContext";
import moment from "moment";

export const GlobalManager = ({ children }) => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [auth, setAuth] = useState({});
  const [userDetails, setUserDetails] = useState(null);
  const [notificationState, setNotificationState] = useState({
    isNotification: false,
    type: "",
    message: "",
  });
  const loginUser = localStorage.getItem("loginUser");

  const { type, message, isNotification } = notificationState;

  useEffect(() => {
    if (loginUser) {
      const descriptedData = DecriptionData(loginUser);
      const isSessionExpired = moment(descriptedData.sessionExpiring).isBefore(
        Date.now()
      );

      if (descriptedData.success && !isSessionExpired) {
        setIsUserLogin(true);
        setUserDetails(descriptedData.data);
      } else {
        setIsUserLogin(false);
        setUserDetails(null);
      }
    }
  }, [loginUser]);

  useEffect(() => {
    if (isNotification) {
      const intervalId = setInterval(() => {
        setNotificationState({
          ...notificationState,
          isNotification: false,
        });
      }, 5000); // in milliseconds
      return () => clearInterval(intervalId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNotification]);

  return (
    <GlobalContext.Provider
      value={{
        auth,
        setAuth,
        setIsUserLogin,
        isUserLogin, // true or false
        userDetails, // user details
        setUserDetails, // to set user details
        setNotificationState, // Global message,
        notificationState,
      }}
    >
      {isNotification && (
        <NotificationAlert
          type={type}
          info={message}
          onClose={() =>
            setNotificationState({
              ...notificationState,
              isNotification: false,
            })
          }
        />
      )}
      <div style={{ position: "relative" }}>{children}</div>
    </GlobalContext.Provider>
  );
};
