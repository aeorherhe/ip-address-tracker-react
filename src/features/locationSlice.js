import { createSlice } from "@reduxjs/toolkit";
import { fetchLocation } from "../services/customFetch";

const initialState = {
  inputIpAddress: "",
  ipAddress: "",
  location: "",
  timezone: "",
  isp: "",
  lat: "",
  lng: "",
  status: "idle",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    userInput: (state, { payload }) => {
      state.inputIpAddress = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocation.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchLocation.fulfilled, (state, { payload }) => {
        if (!payload.location) {
          if (payload.includes("code 403")) {
            state.ipAddress = "unable to access API";
            state.status = "rejected";
            state.location = "";
            state.timezone = "";
            state.isp = "";
            return;
          }

          if (payload.includes("code 422")) {
            state.ipAddress = "invalid IP address";
            state.status = "rejected";
            state.location = "";
            state.timezone = "";
            state.isp = "";
            return;
          }

          state.status = "rejected";
          return;
        }

        state.ipAddress = payload.ip;
        state.status = "fulfilled";
        state.location = `${payload.location.city}, ${payload.location.region} ${payload.location.postalCode}`;
        state.timezone = payload.location.timezone;
        state.isp = payload.isp;
        state.lat = payload.location.lat;
        state.lng = payload.location.lng;
        state.inputIpAddress = "";
      });
  },
});

export const { setIpLocation, userInput } = locationSlice.actions;

export default locationSlice.reducer;
