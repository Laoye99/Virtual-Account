import axios from "axios";

export const baseUrl = "https://8fde-102-88-37-106.ngrok-free.app/";

export const ubaApi = axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "multipart/form-data",
      "ngrok-skip-browser-warning": "http://localhost:3000",
    },
  });
