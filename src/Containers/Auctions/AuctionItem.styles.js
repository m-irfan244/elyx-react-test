import { styled } from "@mui/system";

export const ItemWrapper = styled("div", {
  shouldForwardProp: (props) => props !== "listView",
})(({ theme, listView }) => ({
  display: listView === "list" ? "flex" : "block",
  border: listView === "list" ? "1px solid #e1e1e1" : undefined,
}));

export const ImageWrapper = styled("div", {
  shouldForwardProp: (props) => props !== "listView",
})(({ theme, listView }) => ({
  position: "relative",
  flex: listView === "list" ? "0 0 35%" : undefined,
  maxWidth: listView === "list" ? "35%" : undefined,
  display: listView === "list" ? "flex" : undefined,
  "& img": {
    objectFit: "cover",
    height: listView === "list" ? "auto" : "210px",
    width: "100%",
  },
}));

export const BidWrapper = styled("div")(({ theme }) => ({
  color: "white",
  fontFamily: "Poppins",
  fontSize: "0.875em",
  fontWeight: 600,
  borderRadius: "0.35em",
  position: "absolute",
  backgroundColor: theme.palette.primary.main,
  padding: "0.5rem",
  bottom: 10,
  left: 10,
}));

export const CustomTitle = styled("h3")(({ theme }) => ({
  fontFamily: "Poppins",
  fontWeight: 500,
  fontSize: "1rem",
  lineHeight: "27px",
}));

export const LocationParagraph = styled("p")(({ theme }) => ({
  fontFamily: "Poppins",
  fontWeight: 400,
  fontSize: "0.875rem",
  lineHeight: "21px",
}));
