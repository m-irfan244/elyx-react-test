import React, { Fragment } from "react";
import { Grid, Typography, OutlinedInput } from "@mui/material";
import { yourInfoInputs } from "./formConstants";
import { CustomParagraph } from "src/Components/Common/Auth/Common";

export default React.memo(function YourIInfo({ formData, handleInputChange }) {
  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography variant="h3" color="primary" sx={{ padding: "1rem 0" }}>
          Your info
        </Typography>
      </Grid>
      {yourInfoInputs.map((yourInfo) => (
        <Grid key={yourInfo.id} item xs={12} md={6}>
          <CustomParagraph>{yourInfo.title}</CustomParagraph>
          <OutlinedInput
            name={yourInfo.name}
            value={formData[yourInfo.name]}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
      ))}
    </Fragment>
  );
});
