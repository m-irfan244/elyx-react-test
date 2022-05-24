import React from "react";
import { ShowBlockUserDialog } from "src/Components/Modals/BlockUserDialog";
import { Grid, Avatar, Typography } from "@mui/material";
import { CustomButton, CenteredGridItem } from "../CommonStyles";

export default function UserList({ user }) {
  const { fullName, userType, avatar, registerDate } = user;
  return (
    <Grid
      container
      sx={{
        border: `1px solid #CCD9E0`,
        margin: "0.5rem 0",
        padding: "1rem 0.5rem",
      }}
    >
      <CenteredGridItem item xs={2} md={1}>
        <Avatar alt={fullName} src={avatar} sx={{ width: 50, height: 50 }} />
      </CenteredGridItem>
      <CenteredGridItem item xs={7} md={2}>
        <Typography variant="h4">{fullName}</Typography>
      </CenteredGridItem>
      <Grid
        item
        xs={3}
        md={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h6" color="primary">
          {userType}
        </Typography>
      </Grid>
      <Grid item xs={6} md={3} sx={{ margin: "auto auto" }}>
        <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
          Register on {registerDate}
        </Typography>
      </Grid>
      <CenteredGridItem
        item
        xs={6}
        md={4}
        sx={{ "& button": { marginRight: "10px" } }}
      >
        <CustomButton reverse onClick={() => ShowBlockUserDialog()}>
          Block
        </CustomButton>
        <CustomButton>Approve</CustomButton>
      </CenteredGridItem>
    </Grid>
  );
}
