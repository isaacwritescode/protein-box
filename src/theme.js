import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          color: "white"
        },
        h1: {
          letterSpacing: "-5px",
          lineHeight: 1,
        },
        h2: {
          letterSpacing: "-4px",
          lineHeight: 1,
        },
        h3: {
          letterSpacing: "-3px",
        },
        h4: {
          letterSpacing: "-2px",
        },
        h5: {
          letterSpacing: "-1px",
        },
        h6: {
          letterSpacing: "-0.5px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "100px",
          boxShadow: "none",
          textTransform: "none"
        },
        sizeSmall: {
          padding: "8px 12px"
        },
        sizeMedium: {
          padding: "12px 16px"
        },
        sizeLarge: {
          padding: "14px 20px"
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        sizeSmall: {
          height: "16px",
        },
        sizeMedium: {
          height: "24px",
        },
        sizeLarge: {
          height: "32px",
        }
      }
    }
  },
  typography: {
    fontFamily: "Axiforma-Private",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
      contrastText: "#000000"
    },
    secondary:{
      main: "#ffffff70",
    },
    accent:{
      main: "#F4DC0B",
      contrastText: "#000000"
    }
  }
});

export default theme;