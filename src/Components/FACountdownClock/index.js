import React from "react";
import { Grid } from "@mui/material";
import styles from "@mui/system/styled";

const CounterBody = styles("div")(({ theme }) => ({
  display: "flex",
  width: "78%",
  marginBottom: "3rem",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    width: "auto",
  },
}));

const CountDaysTilte = styles("div")(({ theme }) => ({
  fontSize: "1.25em",
  color: "#fff",
  textAlign: "center",
  background: "#37474f46",
  width: "100%",
  lineHeight: "2em",
  marginRight: "10px",
  marginTop: "1.5rem",
  padding: " 1.5em 0.5em 1em",

  fontFamily: "Poppins",
  textTransform: "uppercase",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.8em",
    padding: "1rem",
  },
}));

const CountDaysNumber = styles("span")(({ theme }) => ({
  display: "block",
  fontSize: "2.5em",
  fontFamily: "Poppins",
  fontWeight: 700,
  textTransform: "uppercase",
}));

export default function FACountdownClock({ days, hours, minutes, seconds }) {
  return (
    <CounterBody>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <CountDaysTilte>
            <CountDaysNumber>{days}</CountDaysNumber>
            {days === 1 ? "Day" : "Days"}
          </CountDaysTilte>
        </Grid>
        <Grid item xs={3}>
          <CountDaysTilte>
            <CountDaysNumber>{hours}</CountDaysNumber>
            Hours
          </CountDaysTilte>
        </Grid>
        <Grid item xs={3}>
          <CountDaysTilte>
            <CountDaysNumber>{minutes}</CountDaysNumber>
            Minutes
          </CountDaysTilte>
        </Grid>
        <Grid item xs={3}>
          <CountDaysTilte>
            <CountDaysNumber>{seconds}</CountDaysNumber>
            Seconds
          </CountDaysTilte>
        </Grid>
      </Grid>
    </CounterBody>
  );
}
