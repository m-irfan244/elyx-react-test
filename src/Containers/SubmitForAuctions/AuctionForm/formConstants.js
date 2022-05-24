import moment from "moment";

export const defaultFormData = {
  full_name: "",
  contact_phone_number: "",
  contact_email_address: "",
  contact_address: "",
  product_name: "",
  buying_year: moment(new Date()).format("y"),
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
  feature: "",
  price:"",
};

export const yourInfoInputs = [
  {
    id: 1,
    title: "Full Name",
    name: "full_name",
  },
  {
    id: 2,
    title: "Contact phone number",
    name: "contact_phone_number",
  },
  {
    id: 3,
    title: "Contact Email Address",
    name: "contact_email_address",
  },
  {
    id: 4,
    title: "Contact Address",
    name: "contact_address",
  },
];

export const inputFeatures = [
  {
    id: "1",
    title: "Engine",
    name: "engine",
  },
  {
    id: "2",
    title: "Drivetrain",
    name: "drivetrain",
  },
  {
    id: "3",
    title: "Transmission",
    name: "transmission",
  },
  {
    id: "4",
    title: "Body Style",
    name: "body_style",
  },
  {
    id: "5",
    title: "Location",
    name: "location",
  },
  {
    id: "6",
    title: "Exterior Color",
    name: "exterior_color",
  },
  {
    id: "7",
    title: "VIN",
    name: "vin",
  },
  {
    id: "8",
    title: "Interior Color",
    name: "interior_color",
  },
  {
    id: "9",
    title: "Mileage",
    name: "mileage",
  },
  {
    id: "10",
    title: "Title Status",
    name: "title_status",
  },
];
