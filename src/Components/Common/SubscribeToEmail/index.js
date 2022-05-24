import React, { useState } from "react";
import styles from "@mui/system/styled";
import { useTheme } from "@mui/material/styles";
import { Grid, Box, TextField, InputAdornment } from "@mui/material";
import { CustomBox, CustomTitle, CustomParagraph } from "../Auth/Common";
import CloseButton from "../CloseButton";
import EmailIcon from "@mui/icons-material/Email";
import emailIcon from "src/Images/email.svg";
import { getSubscribtionEmail } from "src/Api/auth";
import { UseGlobalContext } from "src/Hooks/globalContext/globalContext";
import { useMutation } from "react-query";
import LoadingButton from "@mui/lab/LoadingButton";
import { useModal } from "@ebay/nice-modal-react";
export const CustomInput = styles(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px 0 0 10px",
  },
}));

export default function SubscribeToEmail() {
  const theme = useTheme();
  const [emailDetails, setEmailDetails] = useState({
    email: "",
    name: "",
  });
  const modal = useModal();
  const { setNotificationState, userDetails } = UseGlobalContext();
  const mutateSubscribtionEmail = useMutation(getSubscribtionEmail);
  const { mutate, isLoading } = mutateSubscribtionEmail;
  const handleChange = (event) => {
    event.preventDefault();
    setEmailDetails(() => {
      return {
        email: event.target.value,
        name: userDetails ? userDetails.name : "unknown",
      };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email } = emailDetails;
    if (email) {
      try {
        await mutate(emailDetails, {
          onSuccess: (res) => {
            if (res?.data?.status === 0) {
              setNotificationState({
                isNotification: true,
                type: "error",
                message: `${res?.data?.message}`,
              });
            } else {
              setNotificationState({
                isNotification: true,
                type: "success",
                message: `${res?.data?.message}`,
              });
              modal.remove();
              setEmailDetails({});
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
      // setValidateError(true);
    }
  };

  return (
    <CustomBox>
      <CloseButton />
      <Box textAlign="center">
        <img src={emailIcon} alt="Subscribe to Email" />
      </Box>
      <CustomTitle textAlign="center">Get the Daily Email</CustomTitle>
      <CustomParagraph
        textAlign="center"
        sx={{
          margin: "1rem 0 2.5rem 0",
          padding: "0 2rem",
          [theme.breakpoints.down("sm")]: {
            padding: "0",
          },
        }}
      >
        Get the latest auctions and market info delivered right to your inbox,
        plus a heads up on exclusive content from Doug.
      </CustomParagraph>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={8}>
            <CustomInput
              name="email"
              value={emailDetails.email}
              label="Email Address"
              onChange={handleChange}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon color="primary" fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <LoadingButton
              color="primary"
              variant="contained"
              size="small"
              loading={isLoading}
              sx={{
                height: "100%",
                width: "100%",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                fontSize: "18px",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "14px",
                },
              }}
              type="submit"
            >
              Subscribe
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
      <CustomParagraph
        textAlign="center"
        sx={{
          paddingTop: "1rem",
          color: "#9A9A9A",
          fontSize: "14px",
          [theme.breakpoints.down("sm")]: {
            fontSize: "12px",
          },
        }}
      >
        This service is free to our readers, you can cancel at any time, and we
        won’t give away your email address or spam you.
      </CustomParagraph>
    </CustomBox>
  );
}
