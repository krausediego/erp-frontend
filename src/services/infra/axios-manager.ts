import axios from "axios";

export const server = axios.create({
  baseURL: "http://localhost:1234/api",
  withCredentials: true,
});
