import React from "react";
import { Grid, Typography, Box } from "@mui/material";

export default function DetailsWrapper({ title, htmlData }) {
  return (
    <Grid item xs={12} sx={{ borderBottom: "1px solid rgba(0,0,0,.1)" }}>
      <Typography variant="h3" color="primary" sx={{ padding: "1rem 0" }}>
        {title}
      </Typography>

      <Box
        sx={{ paddingBottom: "1.25rem" }}
        dangerouslySetInnerHTML={{ __html: htmlData }}
      />
    </Grid>
  );
}
