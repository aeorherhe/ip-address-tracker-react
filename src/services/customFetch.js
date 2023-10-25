import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = import.meta.env.VITE_IP_GEOLOCATION_API_KEY;

export const baseURL = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=`;

//
export const customFetch = async (ipAddress) => {
  try {
    const data = await axios.get(`${baseURL}${ipAddress}`);
    return data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const fetchLocation = createAsyncThunk(
  "location/fetchLocation",
  async (ipAddress) => {
    try {
      const response = await axios.get(`${baseURL}${ipAddress}`);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);
