import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
  spacing: 10,
  palette: {
    mode: "light",

    customRibRed: {
      main: red[400],
      superDark: red[800],
      superLight: red[100],
    },
    background: {
      default: "rgb(237, 241, 214)",
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
