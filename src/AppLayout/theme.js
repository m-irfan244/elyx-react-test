import { createTheme } from "@mui/material/styles";

export const CustomTheme = createTheme({
  typography: {
    fontSize: 18,
    fontFamily: ["Poppins", "Sans serif"].join(","),

    subtitle1: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "26px",
      textTransform: "capitalize",
    },

    body1: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "26px",
      textTransform: "capitalize",
    },

    body2: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "14px",
      textTransform: "capitalize",
    },

    h1: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "48px",
      lineHeight: "56px",
      textTransform: "capitalize",
    },
    h2: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "32px",
      lineHeight: "38px",
      textTransform: "capitalize",
    },
    h3: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "24px",
      textTransform: "capitalize",
    },
    h4: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "24px",
      textTransform: "capitalize",
    },
    h5: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "28px",
      textTransform: "capitalize",
    },
    h6: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "17.8px",
      lineHeight: "21.3667px",
      textTransform: "capitalize",
    },
  },

  palette: {
    primary: {
      main: "#0C50CA",
      light: "#757ce8",
      dark: "#002884",
      contrastText: "#fff",
    },

    secondary: {
      main: "#EA5F00",
      light: "#ff7961",
      dark: "#ba000d",
      contrastText: "#000",
    },
    common: {
      lightGrey: "#F8F8FF",
      main: "#37474f",
      heading: "#353535",
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
        },
        sizeMedium: {
          height: "50px",
          width: "222px",
          fontSize: "17.425px",
          "&:hover": {
            backgroundColor: "#000",
          },
        },
        sizeLarge: {
          height: "70px",
          width: "258",
          fontSize: "24.425px",
          fontWeight: 600,
          "&:hover": {
            backgroundColor: "#000",
          },
        },
      },
    },
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
        },
        sizeMedium: {
          height: "50px",
          width: "222px",
          fontSize: "17.425px",
          "&:hover": {
            backgroundColor: "#000",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthMd: {
          maxWidth: "75%",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#0C50CA",
            color: "white",
          },
        },
      },
    },
  },
});
