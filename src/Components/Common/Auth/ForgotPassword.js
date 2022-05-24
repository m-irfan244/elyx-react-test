import React, { useState } from "react";
import {
  Box,
  OutlinedInput,
  InputAdornment,
  FormControl,
  FormHelperText,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useMutation } from "react-query";
import { useModal } from "@ebay/nice-modal-react";
import CloseButton from "../CloseButton";
import EmailIcon from "@mui/icons-material/Email";
import modalLogo from "src/Images/modal-logo.png";
import { CustomBox, CustomTitle, CustomParagraph, inputStyle } from "./Common";
import { userResetPassword } from "src/Api/auth";
import { UseGlobalContext } from "src/Hooks/globalContext/globalContext";

export default function ForgotPassword() {
  const [formData, setFormData] = useState({ email: "" });
  const [validateError, setValidateError] = useState(false);
  const modal = useModal();
  const { setNotificationState } = UseGlobalContext();

  const mutateUserResetPassword = useMutation(userResetPassword);

  const { mutate, isLoading } = mutateUserResetPassword;

  const handleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const { email } = formData;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email) {
      try {
        await mutate(formData, {
          onSuccess: (res) => {
            if (res?.data?.status === 0) {
              setNotificationState({
                isNotification: true,
                type: "error",
                message: `${res?.data?.status_message}`,
              });
            } else {
              setNotificationState({
                isNotification: true,
                type: "success",
                message: `${res?.data?.status_message}`,
              });
            }
            modal.remove();
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
      setValidateError(true);
    }
  };

  return (
    <CustomBox sx={{ margin: "1.5rem" }}>
      <CloseButton />
      <Box textAlign="center">
        <img src={modalLogo} alt="Sign In / Sign Up" />
      </Box>
      <CustomTitle textAlign="center">Forgot Password</CustomTitle>
      <form onSubmit={handleSubmit}>
        <CustomParagraph>Enter Email Address</CustomParagraph>
        <FormControl variant="outlined" fullWidth>
          <OutlinedInput
            id="input-with-icon-adornment"
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
        <LoadingButton
          color="primary"
          variant="contained"
          size="medium"
          loading={isLoading}
          sx={{ marginTop: "1.2rem", width: "100%" }}
          type="submit"
        >
          Submit
        </LoadingButton>
      </form>
    </CustomBox>
  );
}
