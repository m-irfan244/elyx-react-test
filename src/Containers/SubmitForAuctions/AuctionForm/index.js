import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import GrowTransition from "src/Components/GrowTransition";
import {
  Grid,
  Box,
  Typography,
  OutlinedInput,
  Button,
  ToggleButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import LoadingButton from "@mui/lab/LoadingButton";
import { useMutation } from "react-query";
import {
  FeatureBox,
  InputBox,
  FlatTextField,
  StyledToggleButtonGroup,
} from "./formStyles";
import { inputStyle } from "src/Components/Common/Auth/Common";
import { CustomParagraph } from "src/Components/Common/Auth/Common";
import { defaultFormData, inputFeatures } from "./formConstants";
import FileIcon from "src/Images/file.svg";
import ElyxEditor from "src/Components/Common/ElyxEditor";
import YourInfo from "./YourInfo";
import ProductDetails from "./ProductDetails";
import { addSubmitAuctions } from "../../../Api/auth";
import { UseGlobalContext } from "../../../Hooks/globalContext/globalContext";
import { NOTIFICATIONTYPE } from "../../../Utils/contants"

const AuctionForm = () => {
  const theme = useTheme();
  const { setNotificationState, userDetails, isUserLogin } = UseGlobalContext();
  const [formData, setFormData] = useState(defaultFormData);
  const [newFeaturesList, setNewFeaturesList] = useState([]);
  const [newFeature, setNewFeature] = useState({ name: "", description: "" });
  // Elyx Editor Data
  const [productDescription, setProductDescription] = useState("");
  const [productHighlights, setProductHighlights] = useState("");
  const [modifications, setModifications] = useState("");
  const [serviceHistory, setServiceHistory] = useState("");
  const [imagesArr, setImagesArr] = useState({
    images: []
  })
  const mutateAuctions = useMutation(addSubmitAuctions);
  const { mutate, isLoading } = mutateAuctions;

  const handleInputChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleToggleChange = (event, type) => {
    if (type !== null) {
      setFormData((prevData) => ({
        ...prevData,
        [event.target.name]: type,
      }));
    }
  };

  const handleNewFeature = () => {
    setNewFeaturesList([
      ...newFeaturesList,
      { ...newFeature, id: Math.random() * Math.random() * 2 },
    ]);
    setNewFeature({ name: "", description: "" });
  };
  let images = []
  const handleSubmit = async (event) => {
    let formDataImage = new FormData();
    event.preventDefault();
    for (let i = 0; i < imagesArr?.images?.length; i++) {
       formDataImage.append('product_image[]', imagesArr?.images[i])
    }
    formDataImage.append('modifications', modifications);
    formDataImage.append('product_hilights', productHighlights);
    formDataImage.append('product_description', productDescription);
    formDataImage.append('manufacture', formData?.manufecturer);
    formDataImage.append('service_history', serviceHistory);
    formDataImage.append('full_name',formData?.full_name)
    formDataImage.append('contact_phone_number',formData?.contact_phone_number)
    formDataImage.append('contact_email_address',formData?.contact_email_address)
    formDataImage.append('contact_address',formData?.contact_address)
    formDataImage.append('product_name',formData?.product_name)
    formDataImage.append('buying_year',formData?.buying_year)
    formDataImage.append('model',formData?.model)
    formDataImage.append('type_of_product',formData?.type_of_product)
    formDataImage.append('engine',formData?.engine)
    formDataImage.append('drivetrain',formData?.drivetrain)
    formDataImage.append('transmission',formData?.transmission)
    formDataImage.append('body_style',formData?.body_style)
    formDataImage.append('location',formData?.location)
    formDataImage.append('exterior_color',formData?.exterior_color)
    formDataImage.append('vin',formData?.vin)
    formDataImage.append('interior_color',formData?.interior_color)
    formDataImage.append('mileage',formData?.mileage)
    formDataImage.append('title_status',formData?.title_status)
    formDataImage.append('sale_elsewhere',formData?.sale_elsewhere)
    formDataImage.append('minimum_price',formData?.minimum_price)
    formDataImage.append('price',formData?.price)
    formDataImage.append('product_location',formData?.product_location)
    formDataImage.append('feature',formData?.feature)
   
    setImagesArr({})
    document.querySelector(".imageContainer").innerHTML = "";
    if (userDetails?._id) {
      try {
        await mutate(formDataImage, {
          onSuccess: (res) => {
            if (res.data.status === 0) {
              setNotificationState({
                isNotification: true,
                type: `${NOTIFICATIONTYPE.ERROR}`,
                message: `${res.data.status_message}`,
              });
            } else {
              setNotificationState({
                isNotification: true,
                type: `${NOTIFICATIONTYPE.SUCCESS}`,
                message: `${res.data.status_message}`,
              });
              setProductDescription("")
              setProductHighlights("")
              setServiceHistory("")
              setModifications("")
              setFormData({
                ...formData,
                full_name: "",
                contact_phone_number: "",
                contact_email_address: "",
                contact_address: "",
                product_name: "",
                manufecturer: "",
                model: "",
                type_of_product: "",
                engine: "",
                drivetrain: "",
                transmission: "",
                body_style: "",
                location: "",
                exterior_color: "",
                vin: "",
                interior_color: "",
                mileage: "",
                title_status: "",
                sale_elsewhere: "no",
                minimum_price: "no",
                product_location: "",
                price: "",
                feature: ""
              })
            }
          },
          onError: (error) => {
            if (error?.code === 500) {
              setNotificationState({
                isNotification: true,
                type: `${NOTIFICATIONTYPE.ERROR}`,
                message: `${error.message}`,
              });
            } else {
              setNotificationState({
                isNotification: true,
                type: `${NOTIFICATIONTYPE.ERROR}`,
                message: `${error.data.status_message}`,
              });
            }
          },
        });
      } catch (error) {
        console.log(error, "Error");
      }
    } else {
      setNotificationState({
        isNotification: true,
        type: `${NOTIFICATIONTYPE.WARNING}`,
        message: `${"Please SignUp First"}`,
      });
    }
  };

  useEffect(() => {
    let mounted = true
    if (mounted) {
      if (isUserLogin) {
        setFormData({
          ...formData,
          full_name: userDetails?.name,
          contact_phone_number: userDetails?.phone_number,
          contact_email_address: userDetails?.email,
          contact_address: userDetails?.address
        })
      } else {
        setFormData({
          ...formData,
          full_name: "",
          contact_phone_number: "",
          contact_email_address: ""
        })
      }
    }
    return () => {
      mounted = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails, isUserLogin])


  const handleImageUpload = (event) => {
    event.preventDefault()
    let imageContainer = document.querySelector(".imageContainer")

    let files = event.target.files

    for (let i of files) {
      let reader = new FileReader();
      let figure = document.createElement("figure");
      images?.push(i)
      setImagesArr((prev) => {
        imagesArr?.images?.push(i)
        return {
          ...prev,

        }
      }
      )
      reader.onload = () => {
        figure.style.borderRadius = "10px"
        figure.style.color = "#0C50CA";
        figure.style.textTransform = "capitalize";
        figure.style.fontWeight = "400";
        figure.style.width = "200px"
        figure.style.border = "1px solid #0C50CA"
        figure.style.padding = "15px"
        figure.style.display = "flex"
        figure.style.justifyContent = "space-between"
        let closeBtn = document.createElement("button");
        closeBtn.addEventListener("click", (event,) => {
          event.preventDefault()
          event.target.parentNode.remove();
          const index = imagesArr.images.findIndex((index) => {
            return index.name === event.target.parentNode.firstChild.innerHTML
          })
          imagesArr.images.splice(index, 1)
        })
        closeBtn.innerHTML = "x"
        closeBtn.style.fontSize = "17px"
        closeBtn.style.background = "none";
        closeBtn.style.border = "none";
        closeBtn.style.cursor = "pointer";
        let figCap = document.createElement("figcaption");
        figCap.innerText = i.name;
        figure.appendChild(figCap);
        figure.appendChild(closeBtn);
      }
      imageContainer.appendChild(figure);
      reader.readAsDataURL(i);
    }
    if (event) {
      setFormData((prevData) => ({
        ...prevData,
        [event.target.name]: imagesArr.images
      }));
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Grid container columnSpacing={6} rowSpacing={2} justifyContent="center">
        <YourInfo formData={formData} handleInputChange={handleInputChange} />
        <ProductDetails
          formData={formData}
          setFormData={setFormData}
          handleInputChange={handleInputChange}
        />
      </Grid>
      <Grid container sx={{ marginTop: "1rem" }}>
        <Grid item xs={12}>
          <CustomParagraph>Features</CustomParagraph>
        </Grid>
        {inputFeatures.map((feature) => (
          <Grid key={feature.id} item xs={12} md={6} display="flex">
            <FeatureBox>{feature.title}</FeatureBox>
            <InputBox>
              <OutlinedInput
                name={feature.name}
                value={formData[feature.name]}
                onChange={handleInputChange}
                size="small"
                fullWidth
              />
            </InputBox>
          </Grid>
        ))}

        {newFeaturesList.length > 0 &&
          newFeaturesList.map((item) => (
            <GrowTransition key={item.id}>
              <Grid item xs={12} md={6} display="flex">
                <FeatureBox>{item.name}</FeatureBox>
                <InputBox>
                  <OutlinedInput
                    size="small"
                    fullWidth
                    name={item.name}
                    value={item.description}
                  />
                  <DeleteIcon
                    sx={{
                      paddingLeft: "0.5rem",
                      cursor: "pointer",
                      "&:hover": {
                        color: "#d32f2f",
                      },
                    }}
                    onClick={() =>
                      setNewFeaturesList((prevList) =>
                        prevList.filter((list) => list.id !== item.id)
                      )
                    }
                  />
                </InputBox>
              </Grid>
            </GrowTransition>
          ))}
        <Grid
          item
          xs={12}
          sx={{ margin: "1rem 0" }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <FlatTextField
            bgColor="#F8F8FF"
            placeholder="Feature name"
            value={newFeature.name}
            onChange={(event) =>
              setNewFeature((prev) => ({
                ...prev,
                name: event.target.value
              }))}
            sx={{
              [theme.breakpoints.down("sm")]: {
                "& input::placeholder": {
                  fontSize: "13px",
                },
              },
            }}
          />
          <FlatTextField
            value={newFeature.description}
            onChange={(event) =>
              setNewFeature((prev) => ({
                ...prev,
                description: event.target.value,
              }))
            }
          />

          <Button
            color="primary"
            variant="contained"
            size="medium"
            onClick={handleNewFeature}
            sx={{
              width: "40%",
              marginLeft: "1rem",
              [theme.breakpoints.down("lg")]: {
                fontSize: "14px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "10px",
              },
            }}
          >
            Add custom feature
          </Button>
        </Grid>
        <Grid item xs={12}>
          <CustomParagraph sx={{ margin: "1rem 0" }}>
            Product Description
          </CustomParagraph>
          <ElyxEditor
            value={productDescription}
            setValue={setProductDescription}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomParagraph sx={{ margin: "1rem 0" }}>
            Product Highlights
          </CustomParagraph>
          <ElyxEditor
            value={productHighlights}
            setValue={setProductHighlights}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomParagraph sx={{ margin: "1rem 0" }}>
            Modifications
          </CustomParagraph>
          <ElyxEditor value={modifications} setValue={setModifications} />
        </Grid>
        <Grid item xs={12}>
          <CustomParagraph sx={{ margin: "1rem 0" }}>
            Service History
          </CustomParagraph>
          <ElyxEditor value={serviceHistory} setValue={setServiceHistory} />
        </Grid>
        <Grid item xs={12}>
          <CustomParagraph sx={{ margin: "0.5rem 0" }}>
            Product Location
          </CustomParagraph>
          <OutlinedInput
            size="small"
            fullWidth
            name="product_location"
            value={formData.product_location}
            onChange={handleInputChange}
          />
        </Grid>
        <Box id="selling-product" />
        <Grid item xs={12} sx={{ marginTop: "1.5rem" }}>
          <CustomParagraph sx={{ margin: "0.5rem 0" }}>
            Is this product for sale elsewhere?
          </CustomParagraph>
          <StyledToggleButtonGroup
            value={formData.sale_elsewhere}
            exclusive
            onChange={handleToggleChange}
            sx={inputStyle}
          >
            <ToggleButton
              sx={{ width: "100px", height: "50px" }}
              value="yes"
              name="sale_elsewhere"
            >
              Yes
            </ToggleButton>
            <ToggleButton
              sx={{ width: "100px", height: "50px" }}
              value="no"
              name="sale_elsewhere"
            >
              No
            </ToggleButton>
          </StyledToggleButtonGroup>
        </Grid>
        <Box id="reserve-price" />
        <Grid item xs={12} sx={{ marginTop: "1.5rem" }}>
          <Typography variant="h3" color="primary" sx={{ padding: "1rem 0" }}>
            Reserve Price
          </Typography>
          <Typography
            paragraph
            sx={{ lineHeight: "26.7667px", fontFamily: "Poppins" }}
          >
            The reserve price is a secret, minimum price required for your
            vehicle to sell. Cars with reserve prices may garner less interest
            than those without reserves.
          </Typography>
          <Typography paragraph sx={{ lineHeight: "26.7667px" }}>
            Please note that bidding often brings the end result well above the
            reserve price.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <CustomParagraph sx={{ margin: "0.5rem 0" }}>
              Do you set a minimum price of the product?
            </CustomParagraph>
            <StyledToggleButtonGroup
              value={formData.minimum_price}
              exclusive
              onChange={handleToggleChange}
              sx={inputStyle}
            >
              <ToggleButton
                sx={{ width: "100px", height: "50px" }}
                value="yes"
                name="minimum_price"
              >
                Yes
              </ToggleButton>
              <ToggleButton
                sx={{ width: "100px", height: "50px" }}
                value="no"
                name="minimum_price"
              >
                No
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Box>
          {formData.minimum_price === "yes" && (
            <Box>
              <CustomParagraph sx={{ margin: "0.5rem 0" }}>
                What reserve price would you like (USD)?
              </CustomParagraph>
              <OutlinedInput
                // size="small"
                fullWidth
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </Box>
          )}
        </Grid>
        <Box id="photos" />
        <Grid item xs={12} sx={{ margin: "1.5rem 0" }}>
          <Typography variant="h3" color="primary" sx={{ padding: "1rem 0" }}>
            Photo
          </Typography>
          <CustomParagraph sx={{ margin: "0.5rem 0" }}>
            Please upload at least 12 photos of the exterior and interior of the
            car.
          </CustomParagraph>
          <div className="file-upload">
            <label id="upload-container" className="form__container">
              <img src={FileIcon} alt="Pictures upload" />
              <div className="mt-3">
                Click to select photos, or drag and drop here
              </div>
            </label>
            <input
              id="upload-files"
              className="form__file"
              type="file"
              name="product_image[]"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
            />
          </div>
          <Grid className="imageContainer" style={{
            width: "100%",
            position: "relative",
            margin: "auto",
            display: "flex",
            flexWrap: "wrap"
          }}>
          </Grid>
        </Grid>
      </Grid>
      <LoadingButton
        loading={isLoading}
        color="primary"
        variant="contained"
        size="large"
        type="submit"
      >
        Submit for auction
      </LoadingButton>
    </form>
  );
};

export default AuctionForm;
