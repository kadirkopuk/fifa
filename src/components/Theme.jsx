import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
  spacing: 10,
  palette: {
    mode: "light",
    primary: {
      main: "#40513B",
      sage: "#9DC08B",
    },
    secondary: {
      main: "#609966",
    },

    customRibRed: {
      main: red[400],
      superDark: red[800],
      superLight: red[100],
    },
    background: {
      default: "#EDF1D6",
    },
  },
  typography: {
    fontFamily: "Lato, sans-serif",
    fontstyle: "normal",
    fontSize: 15,
    body1: {
      lineHeight: "20px",
    },
  },
});

export default theme;
