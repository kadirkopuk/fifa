import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import footballReducer from "../features/footballSlice";
import counterReducer from "../features/counterSlice";
import apiSlice from "./api/apiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
    football: footballReducer,
    counter: counterReducer,
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
