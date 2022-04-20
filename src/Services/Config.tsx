import axios from "axios";

const BASE_URL = process.env.REACT_APP_ENDPOINT_API;

const API = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
