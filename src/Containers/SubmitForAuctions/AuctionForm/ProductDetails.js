import React, { Fragment } from "react";
import {
  Grid,
  Box,
  Typography,
  OutlinedInput,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import moment from "moment";
import DatePicker from "@mui/lab/DatePicker";
import { CustomParagraph } from "../../../Components/Common/Auth/Common";

export default React.memo(function ProductDetails({
  formData,
  handleInputChange,
  setFormData,
}) {
  return (
    <Fragment>
      <Box id="product-details" />
      <Grid item xs={12}>
        <Typography variant="h3" color="primary" sx={{ padding: "1rem 0" }}>
          Product Details
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomParagraph>Product Name</CustomParagraph>
        <OutlinedInput
          name="product_name"
          value={formData.product_name}
          onChange={handleInputChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomParagraph>Buying Year</CustomParagraph>
        <DatePicker
          views={["year"]}
          value={formData.buying_year}
          maxDate={moment(new Date())}
          onChange={(newValue) => {
            setFormData((prevData) => ({
              ...prevData,
              buying_year: newValue?.format("y"),
            }));
          }}
          renderInput={(params) => (
            <TextField fullWidth {...params} helperText={null} />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomParagraph>Manufecturer</CustomParagraph>
        <OutlinedInput
          name="manufecturer"
          value={formData.manufecturer}
          onChange={handleInputChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomParagraph>Model</CustomParagraph>
        <OutlinedInput
          name="model"
          value={formData.model}
          onChange={handleInputChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <CustomParagraph>Select the type of your product</CustomParagraph>
        <Select
          name="type_of_product"
          value={formData.type_of_product}
          fullWidth
          onChange={handleInputChange}
        >
          <MenuItem value="vintage">Vintage</MenuItem>
          <MenuItem value="modern">Modern</MenuItem>
          <MenuItem value="futuristic">Futuristic</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12} md={12}>
        <CustomParagraph>Features</CustomParagraph>
        <OutlinedInput
          name="feature"
          value={formData.feature}
          onChange={handleInputChange}
          fullWidth
        />
      </Grid>
    </Fragment>
  );
});
