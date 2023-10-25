import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "../features/locationSlice";

const store = configureStore({
  reducer: {
    location: locationReducer,
  },
});

export default store;
