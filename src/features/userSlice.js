import { createSlice } from "@reduxjs/toolkit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const initialState = {
  token: null,
  mode: localStorage.getItem("mode")
    ? localStorage.getItem("mode")
    : window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    changeMode: (state) => {
      if (state.mode === "light") {
        state.mode = "dark";
        localStorage.setItem("mode", "dark");
      } else {
        state.mode = "light";
        localStorage.setItem("mode", "light");
      }
    },
  },
});

export const { setToken, changeMode } = userSlice.actions;

export const selectToken = (state) => state.user.token;

export const selectMode = (state) => state.user.mode;

export default userSlice.reducer;
