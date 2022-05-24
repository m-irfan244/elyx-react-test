import React, { useState, useEffect } from "react";
import styled from "@mui/system/styled";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Grid, OutlinedInput, Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { ShowChangePasswordDialog } from "src/Components/Modals/ChangePasswordDialog";
import GrowTransition from "src/Components/GrowTransition";
import { UseGlobalContext } from "src/Hooks/globalContext/globalContext";
import { useQuery } from "react-query";
import { getSingleUserAccount } from "src/Api/auth";
import { userProfileEdit } from "src/Api/auth";
import { useMutation } from "react-query";
import { NOTIFICATIONTYPE } from "src/Utils/contants";

export const CustomLabel = styled("label")(({ theme }) => ({
  display: "block",
  fontFamily: "Poppins",
  fontSize: "18px",
  fontWeight: 400,
  padding: "0.5rem 0",
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
  // [theme.breakpoints.down("sm")]: {
  //   fontSize: "12",
  // },
}));

export default function MyAccount() {
  const theme = useTheme();
  const { setNotificationState, userDetails } = UseGlobalContext();
  const [validateError] = useState(false);
  const [formData, setFormData] = useState({
    user_id: userDetails._id,
    name: "",
    email: "",
    phone_number: "",
    address: "",
  });

  const mutateUserProfileChage = useMutation(userProfileEdit);
  const { mutate, isLoading } = mutateUserProfileChage;

  const { data: userDetailsData } = useQuery(
    ["getSingleUserAccount", userDetails?._id],
    getSingleUserAccount,
    {
      enabled: userDetails?._id ? true : false,
    }
  );
  useEffect(() => {
    if (userDetailsData) {
      const { name, phone_number, email, address } = userDetailsData?.data;
      setFormData({
        user_id: userDetails._id,
        name: name,
        phone_number: phone_number,
        email: email,
        address: address ? address : "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetailsData?.data]);

  const handleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const hanleSubmit = async (event) => {
    event.preventDefault();
    if (userDetailsData) {
      try {
        await mutate(formData, {
          onSuccess: (res) => {
            if (res?.data?.status === 0) {
              setNotificationState({
                isNotification: true,
                type: `${NOTIFICATIONTYPE.ERROR}`,
                message: `${res?.data?.status_message}`,
              });
            } else {
              setNotificationState({
                isNotification: true,
                type: `${NOTIFICATIONTYPE.SUCCESS}`,
                message: `${res?.data?.message}`,
              });
            }
          },
          onError: (error) => {
            setNotificationState({
              isNotification: true,
              type: "error",
              message: `${error?.message}`,
            });
          },
        });
      } catch (error) {
        console.log(error, "Error");
      }
    } else {
      validateError(true);
    }
  };

  const { name, phone_number, email, address } = formData;
  return (
    <GrowTransition>
      <Box>
        <Typography
          variant="h1"
          sx={{ paddingBottom: "1.9rem", fontWeight: 700 }}
        >
          My Account
        </Typography>
        <Typography
          variant="h2"
          color="primary"
          sx={{ marginBottom: "2rem", fontWeight: 700 }}
        >
          Account
        </Typography>
        <form onSubmit={hanleSubmit}>
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} item>
              <CustomLabel htmlFor="fullName">Full name</CustomLabel>
              <OutlinedInput
                id="fullName"
                name="name"
                fullWidth
                value={name || ""}
                onChange={handleChange}
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <CustomLabel htmlFor="phone_number">
                Contact Phone number
              </CustomLabel>
              <OutlinedInput
                id="phone_number"
                name="phone_number"
                type="tel"
                fullWidth
                value={phone_number || ""}
                onChange={handleChange}
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <CustomLabel htmlFor="email">Contact Email Address</CustomLabel>
              <OutlinedInput
                id="email"
                name="email"
                type="email"
                fullWidth
                value={email || ""}
                onChange={handleChange}
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <CustomLabel htmlFor="address">Contact Address</CustomLabel>
              <OutlinedInput
                id="address"
                name="address"
                fullWidth
                value={address}
                onChange={handleChange}
              />
            </Grid>
            <Grid xs={12} sm={6} item></Grid>
            <Grid
              xs={12}
              sm={6}
              item
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end"
              sx={{
                [theme.breakpoints.down("md")]: {
                  justifyContent: "center",
                },
              }}
            >
              <Button
                onClick={ShowChangePasswordDialog}
                sx={{
                  border: "1px solid",
                  height: "58.8883px",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                  },
                }}
              >
                Change Password
              </Button>
            </Grid>
            <Grid
              xs={12}
              item
              sx={{
                textAlign: "center",
              }}
            >
              <LoadingButton
                color="primary"
                type="submit"
                size="large"
                variant="contained"
                loading={isLoading}
              >
                Save Changes
              </LoadingButton>
            </Grid>
          </Grid>
        </form>
      </Box>
    </GrowTransition>
  );
}
