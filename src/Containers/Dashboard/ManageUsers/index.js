import React from "react";
import GrowTransition from "src/Components/GrowTransition";
import { Box, Typography, Button } from "@mui/material";
import { ShowAddNewUserDialog } from "src/Components/Modals/AddNewUserDialog";

import UserList from "./UserList";

import user1 from "src/Images/user1.png";
import user2 from "src/Images/user2.png";
import user3 from "src/Images/user3.png";
import user4 from "src/Images/user4.png";

const userListPlaceholder = [
  {
    id: 1,
    fullName: "Sandhya Mer",
    userType: "buyer",
    avatar: user1,
    registerDate: "16 June 2021",
  },
  {
    id: 2,
    fullName: "Awesome Guy",
    userType: "seller",
    avatar: user2,
    registerDate: "14 Ausut 2019",
  },
  {
    id: 3,
    fullName: "Slow Rabbit",
    userType: "buyer",
    avatar: user3,
    registerDate: "31 September 2021",
  },
  {
    id: 4,
    fullName: "Fast Turtle",
    userType: "buyer",
    avatar: user4,
    registerDate: "24 March 104",
  },
  {
    id: 5,
    fullName: "Smiley Dog",
    userType: "seller",
    avatar: user1,
    registerDate: "11 December 2010",
  },
];

export default function ManageUsers() {
  return (
    <GrowTransition>
      <Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h1" sx={{ paddingBottom: "2rem" }}>
            Manage Users
          </Typography>
          <Button
            variant="outlined"
            size="medium"
            sx={{
              "&:hover": { backgroundColor: "primary.main", color: "white" },
            }}
            onClick={() => ShowAddNewUserDialog()}
          >
            Add new user
          </Button>
        </Box>
        {userListPlaceholder.map((user) => (
          <UserList key={user.id} user={user} />
        ))}
      </Box>
    </GrowTransition>
  );
}
