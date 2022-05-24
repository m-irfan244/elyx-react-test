import React, { useState } from "react";
import {
  Box,
  OutlinedInput,
  InputAdornment,
  FormControl,
  FormHelperText,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { useModal } from "@ebay/nice-modal-react";
import { useMutation } from "react-query";
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
import { userLogin } from "src/Api/auth";
import { UseGlobalContext } from "src/Hooks/globalContext/globalContext";
import { NOTIFICATIONTYPE } from "src/Utils/contants";
import { EncriptData } from "src/Utils/encription";
import moment from "moment";

export default function SignIn({ handleChangeIndex }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const modal = useModal();
  const { setNotificationState } = UseGlobalContext();
  const [validateError, setValidateError] = useState(false);

  const mutateUserLogin = useMutation(userLogin);
  const { mutate, isLoading } = mutateUserLogin;

  const handleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  const { email, password } = formData;

  const handleSubmit = async (event) => {
    event?.preventDefault();
    if (email && password) {
      try {
        await mutate(formData, {
          onSuccess: (res) => {
            if (res?.data?.success) {
              localStorage.setItem(
                "loginUser",
                EncriptData({
                  ...res.data,
                  sessionExpiring: moment(Date.now()).add(2, "days"),
                })
              );
              setNotificationState({
                isNotification: true,
                type: `${NOTIFICATIONTYPE.SUCCESS}`,
                message: `${res?.data?.message}`,
              });
              modal.remove();
            } else {
              setNotificationState({
                isNotification: true,
                type: `${NOTIFICATIONTYPE.ERROR}`,
                message: `${res?.data?.message}`,
              });
            }
          },
          onError: (error) => {
            setNotificationState({
              isNotification: true,
              type: `${NOTIFICATIONTYPE.ERROR}`,
              message: `${error.response?.data?.message}`,
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
    <CustomBox>
      <CloseButton />
      <Box textAlign="center">
        <img src={modalLogo} alt="Sign In / Sign Up" />
      </Box>
      <CustomTitle textAlign="center">Login with ElyX</CustomTitle>
      <CustomParagraph
        textAlign="center"
        sx={{ margin: "1rem 0 1.5rem 0", padding: "0 2rem" }}
      >
        Let’s set up your account so you can start a bidding.
      </CustomParagraph>
      <form onSubmit={handleSubmit}>
        <CustomParagraph>Email Address</CustomParagraph>
        <FormControl variant="outlined" fullWidth>
          <OutlinedInput
            id="input-with-icon-adornment-adress"
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
        <Box textAlign="right">
          <CustomMuiLink onClick={() => handleChangeIndex(2)}>
            Forgot password?
          </CustomMuiLink>
        </Box>

        <LoadingButton
          color="primary"
          variant="contained"
          size="medium"
          loading={isLoading}
          sx={{ marginTop: "1.2rem", width: "100%" }}
          type="submit"
        >
          Login Now
        </LoadingButton>
      </form>
      <CustomParagraph textAlign="center" sx={{ paddingTop: "1rem" }}>
        Don't have an account?{" "}
        <CustomMuiLink onClick={() => handleChangeIndex(1)}>
          Get Started
        </CustomMuiLink>
      </CustomParagraph>
    </CustomBox>
  );
}
