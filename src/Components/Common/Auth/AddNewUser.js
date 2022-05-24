import React, { useState } from "react";
import {
  Grid,
  Box,
  OutlinedInput,
  InputAdornment,
  FormControl,
  FormHelperText,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useMutation } from "react-query";
import LoadingButton from "@mui/lab/LoadingButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { CustomBox, CustomTitle, CustomParagraph, inputStyle } from "./Common";
import CloseButton from "../CloseButton";
import { addNewUserApi } from "Api/auth";
import userIcon from "src/Images/user-icon.svg";

export default function AddNewUser({ handleChangeIndex }) {
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    email: "",
    phone: "",
  });
  const [validateError, setValidateError] = useState(false);

  const mutateAddNewUser = useMutation(addNewUserApi);
  const { isLoading } = mutateAddNewUser;

  const { fullName, password, email, phone } = formData;

  const handleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (fullName && password && email && phone) {
    } else {
      setValidateError(true);
    }
  };

  return (
    <CustomBox sx={{ margin: "1.5rem" }}>
      <CloseButton />
      <Box textAlign="center">
        <img src={userIcon} alt="Sign In / Sign Up" />
      </Box>

      <CustomTitle textAlign="center">Add New User</CustomTitle>
      <CustomParagraph
        textAlign="center"
        sx={{ margin: "1rem 0 1.5rem 0", padding: "0 2rem" }}
      >
        Let’s set up your account so you can start a bidding.
      </CustomParagraph>
      <form onSubmit={handleSubmit}>
        <Grid container columnSpacing={2}>
          <Grid item xs={12}>
            <CustomParagraph>Full Name</CustomParagraph>
            <FormControl variant="outlined" fullWidth>
              <OutlinedInput
                id="input-with-icon-adornment-name full-name"
                name="fullName"
                type="text"
                fullWidth
                value={fullName}
                error={fullName ? false : validateError}
                onChange={handleChange}
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircleIcon color="primary" fontSize="small" />
                  </InputAdornment>
                }
                sx={inputStyle}
              />
              {!fullName && validateError && (
                <FormHelperText error={true} required={true}>
                  Full Name is Required
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <CustomParagraph>One Time Password</CustomParagraph>
            <FormControl variant="outlined" fullWidth>
              <OutlinedInput
                id="input-with-icon-adornment-name one-time-password"
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
          <Grid item xs={12} md={6}>
            <CustomParagraph>Email</CustomParagraph>
            <FormControl variant="outlined" fullWidth>
              <OutlinedInput
                id="input-with-icon-adornment-name email"
                name="email"
                type="email"
                value={email}
                error={email ? false : validateError}
                fullWidth
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
          <Grid item xs={12} md={6}>
            <CustomParagraph>Phone</CustomParagraph>
            <FormControl variant="outlined" fullWidth>
              <OutlinedInput
                id="input-with-icon-adornment-name phone"
                name="phone"
                type="text"
                fullWidth
                value={phone}
                error={phone ? false : validateError}
                onChange={handleChange}
                startAdornment={
                  <InputAdornment position="start">
                    <PhoneIcon color="primary" fontSize="small" />
                  </InputAdornment>
                }
                sx={inputStyle}
              />
              {!phone && validateError && (
                <FormHelperText error={true} required={true}>
                  Phone is Required
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
        </Grid>

        <LoadingButton
          color="primary"
          variant="contained"
          size="medium"
          sx={{ marginTop: "1.2rem", width: "100%" }}
          type="submit"
          loading={isLoading}
        >
          Add new user
        </LoadingButton>
      </form>
    </CustomBox>
  );
}
