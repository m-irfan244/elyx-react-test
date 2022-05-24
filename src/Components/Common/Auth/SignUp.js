import React, { useState } from "react";
import {
  Grid,
  Box,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
  FormControl,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useMutation } from "react-query";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  CustomBox,
  CustomTitle,
  CustomParagraph,
  CustomMuiLink,
  inputStyle,
} from "./Common";
import CloseButton from "../CloseButton";
import modalLogo from "src/Images/modal-logo.png";
import { userRegister } from "src/Api/auth";
import { UseGlobalContext } from "src/Hooks/globalContext/globalContext";
import { NOTIFICATIONTYPE } from "src/Utils/contants";

export default function SignIn({ handleChangeIndex }) {
  const { setNotificationState } = UseGlobalContext();
  const [validateError, setValidateError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });

  const mutateUserRegister = useMutation(userRegister);
  const { mutate, isLoading } = mutateUserRegister;
  const handleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const { name, password, phone_number, confirm_password, email } = formData;
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name && email && password && confirm_password && phone_number) {
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
              handleChangeIndex(0);
            }
          },
          onError: (error) => {
            setNotificationState({
              isNotification: true,
              type: "error",
              message: `${error?.response?.data?.message}`,
            });
          },
        });
      } catch (error) {
        console.log(error, "Error");
      }
    } else {
      setValidateError(true);
    }
  };

  return (
    <CustomBox sx={{ margin: "0 1.5rem" }}>
      <CloseButton />
      <Box textAlign="center">
        <img src={modalLogo} alt="Sign In / Sign Up" />
      </Box>

      <CustomTitle textAlign="center">Sign Up with ElyX</CustomTitle>
      <CustomParagraph
        textAlign="center"
        sx={{ margin: "1rem 0 1.5rem 0", padding: "0 2rem" }}
      >
        Let’s set up your account so you can start a bidding.
      </CustomParagraph>
      <form onSubmit={handleSubmit}>
        <Grid container columnSpacing={2}>
          <Grid item xs={12}>
            <CustomParagraph> Full Name </CustomParagraph>
            <FormControl variant="outlined" fullWidth>
              <OutlinedInput
                id="input-with-icon-adornment-name"
                name="name"
                type="text"
                fullWidth
                value={name}
                error={name ? false : validateError}
                onChange={handleChange}
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircleIcon color="primary" fontSize="small" />
                  </InputAdornment>
                }
                sx={inputStyle}
              />
              {!name && validateError && (
                <FormHelperText error={true} required={true}>
                  Full Name is Required
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item sm={12} md={6}>
            <CustomParagraph>Email</CustomParagraph>
            <FormControl variant="outlined" fullWidth>
              <OutlinedInput
                id="input-with-icon-adornment-email"
                name="email"
                type="email"
                fullWidth
                value={email}
                error={email ? false : validateError}
                onChange={handleChange}
                startAdornment={
                  <InputAdornment position="start">
                    <EmailIcon color="primary" fontSize="small" />
                  </InputAdornment>
                }
                sx={inputStyle}
              />
              {!email && validateError && (
                <FormHelperText error={true} required={true}>
                  Email is Required
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item sm={12} md={6}>
            <CustomParagraph>Phone</CustomParagraph>
            <FormControl variant="outlined" fullWidth>
              <OutlinedInput
                id="input-with-icon-adornment-phone"
                name="phone_number"
                type="number"
                fullWidth
                value={phone_number}
                error={phone_number ? false : validateError}
                onChange={handleChange}
                startAdornment={
                  <InputAdornment position="start">
                    <PhoneIcon color="primary" fontSize="small" />
                  </InputAdornment>
                }
                sx={inputStyle}
              />
              {!phone_number && validateError && (
                <FormHelperText error={true} required={true}>
                  Phone Number is Required
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item sm={12} md={6}>
            <CustomParagraph>Password</CustomParagraph>
            <FormControl variant="outlined" fullWidth>
              <OutlinedInput
                id="input-with-icon-adornment-password"
                name="password"
                type="password"
                fullWidth
                value={password}
                error={password ? false : validateError}
                onChange={handleChange}
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon color="primary" fontSize="small" />
                  </InputAdornment>
                }
                sx={inputStyle}
              />
              {!password && validateError && (
                <FormHelperText error={true} required={true}>
                  Password is Required
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item sm={12} md={6}>
            <CustomParagraph>Confirm Password</CustomParagraph>
            <FormControl variant="outlined" fullWidth>
              <OutlinedInput
                id="input-with-icon-adornment-confirm-password"
                name="confirm_password"
                type="password"
                fullWidth
                value={confirm_password}
                error={confirm_password ? false : validateError}
                onChange={handleChange}
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon color="primary" fontSize="small" />
                  </InputAdornment>
                }
                sx={inputStyle}
              />

              {((!confirm_password && validateError) ||
                confirm_password !== password) && (
                  <FormHelperText error={true} required={true}>
                    {password !== confirm_password
                      ? "Password Not Match"
                      : "Password is Required"}
                  </FormHelperText>
                )}
            </FormControl>
          </Grid>
        </Grid>
        <LoadingButton
          color="primary"
          variant="contained"
          size="medium"
          loading={isLoading}
          sx={{ marginTop: "1.2rem", width: "100%" }}
          type="submit"
        >
          Sign up now
        </LoadingButton>
      </form>
      <CustomParagraph textAlign="center" sx={{ paddingTop: "1rem" }}>
        Already have an account?{" "}
        <CustomMuiLink href="#" onClick={() => handleChangeIndex(0)}>
          Login Now
        </CustomMuiLink>
      </CustomParagraph>
    </CustomBox>
  );
}
