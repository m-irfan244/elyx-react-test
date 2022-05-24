import React, { useEffect, useState } from "react";
import {
  Box,
  OutlinedInput,
  InputAdornment,
  FormControl,
  FormHelperText,
} from "@mui/material";
import CloseButton from "../CloseButton";
import LoadingButton from "@mui/lab/LoadingButton";
import LockIcon from "@mui/icons-material/Lock";
import {
  CustomBox,
  CustomTitle,
  CustomParagraph,
  CustomMuiLink,
  inputStyle,
} from "./Common";
import { useModal } from "@ebay/nice-modal-react";
import modalLogo from "src/Images/modal-logo.png";
import { userChangePassword } from "../../../Api/auth";
import { useMutation } from "react-query";
import { UseGlobalContext } from "src/Hooks/globalContext/globalContext";
import { NOTIFICATIONTYPE } from "src/Utils/contants";

export default function SignIn({ handleChangeIndex }) {

  const { setNotificationState, userDetails } = UseGlobalContext();
  const modal = useModal();
  const [validateError, setValidateError] = useState(false);
  const [formData, setFormData] = useState({
    session_id: userDetails?.id,
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const mutateChangePassword = useMutation(userChangePassword);
  const { mutate, isLoading } = mutateChangePassword;

  useEffect(() => {
    setFormData({
      ...formData,
      session_id: userDetails?.id,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      session_id: userDetails._id,
      [event.target.name]: event.target.value,
    }));
  };

  const { old_password, new_password, confirm_password } = formData;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (old_password && new_password && confirm_password) {
      try {
        await mutate(formData, {
          onSuccess: (res) => {
            if (res?.data?.status === 0) {
              setNotificationState({
                isNotification: true,
                type: `${NOTIFICATIONTYPE.ERROR}`,
                message: `${res?.data?.message}`,
              });
            } else {
              setNotificationState({
                isNotification: true,
                type: `${NOTIFICATIONTYPE.SUCCESS}`,
                message: `${res?.data?.message}`,
              });
              modal.remove();
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
      setValidateError(true);
    }
  };

  return (
    <CustomBox sx={{ margin: "0 1.5rem" }}>
      <CloseButton />
      <Box textAlign="center">
        <img src={modalLogo} alt="Sign In / Sign Up" />
      </Box>
      <CustomTitle textAlign="center">Change Password</CustomTitle>
      <CustomParagraph
        textAlign="center"
        sx={{ margin: "1rem 0 1.5rem 0", padding: "0 2rem" }}
      >
        Make sure you remember your password
      </CustomParagraph>
      <form onSubmit={handleSubmit}>
        <CustomParagraph>Current Password</CustomParagraph>
        <FormControl variant="outlined" fullWidth>
          <OutlinedInput
            id="input-with-icon-adornment old_password"
            name="old_password"
            type="password"
            fullWidth
            value={old_password}
            error={old_password ? false : validateError}
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                <LockIcon color="primary" fontSize="small" />
              </InputAdornment>
            }
            sx={inputStyle}
          />
          {!old_password && validateError && (
            <FormHelperText error={true} required={true}>
              Current Password is Required
            </FormHelperText>
          )}
        </FormControl>
        <CustomParagraph>New password</CustomParagraph>
        <FormControl variant="outlined" fullWidth>
          <OutlinedInput
            id="input-with-icon-adornment new_password"
            name="new_password"
            type="password"
            fullWidth
            value={new_password}
            error={new_password ? false : validateError}
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                <LockIcon color="primary" fontSize="small" />
              </InputAdornment>
            }
            sx={inputStyle}
          />
          {!new_password && validateError && (
            <FormHelperText error={true} required={true}>
              New password is Required
            </FormHelperText>
          )}
        </FormControl>
        <CustomParagraph>Re-enter New password</CustomParagraph>
        <FormControl variant="outlined" fullWidth>
          <OutlinedInput
            id="input-with-icon-adornment confirm_password"
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
            confirm_password !== new_password) && (
              <FormHelperText error={true} required={true}>
                {new_password !== confirm_password
                  ? "Re-enter password Not Match"
                  : "Re-enter New password is Required"}
              </FormHelperText>
            )}
        </FormControl>
        <LoadingButton
          color="primary"
          variant="contained"
          size="medium"
          sx={{ marginTop: "1.2rem", width: "100%" }}
          type="submit"
          loading={isLoading}
        >
          Change password
        </LoadingButton>
      </form>
      <Box textAlign="center" sx={{ paddingTop: "1rem" }}>
        <CustomMuiLink onClick={() => handleChangeIndex(1)}>
          Forgot your password?
        </CustomMuiLink>
      </Box>
    </CustomBox>
  );
}
