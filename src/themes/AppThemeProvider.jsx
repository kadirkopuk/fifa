import React from "react";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { selectMode } from "../features/userSlice";

function AppThemeProvider({ children }) {
  const mode = useSelector(selectMode);
  const theme = responsiveFontSizes(
    createTheme({
      spacing: 10,
      palette: {
        mode,
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
          default: mode === "dark" ? "#1F1F1F" : "#FCFBFA",
          opposite: mode === "dark" ? "#FCFBFA" : "#1F1F1F",
          paper: mode === "dark" ? "#131313" : "#FCFCFC",
          // default: "#EDF1D6",
        },
      },
      typography: {
        fontFamily: "Lato, sans-serif",
        fontstyle: "normal",
        body1: {
          lineHeight: "20px",
        },
      },

      components: {
        MuiIconButton: {
          styleOverrides: {
            root: {
              aspectRatio: "1/1",
            },
          },
        },
      },
    })
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
