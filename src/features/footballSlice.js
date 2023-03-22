import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clubs: [],
};

export const footballSlice = createSlice({
  name: "football",
  initialState,

  reducers: {
    setClubs: (state, action) => {
      state.clubs = action.payload;
    },
  },
});

export const { setClubs } = footballSlice.actions;

export const selectClubs = (state) => state.football.clubs;

export default footballSlice.reducer;
