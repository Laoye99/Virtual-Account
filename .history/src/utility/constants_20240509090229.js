import axios from "axios";

export const baseUrl = "https://9d51-102-217-205-1.ngrok-free.app/";

export const ubaApi = axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "multipart/form-data",
      "ngrok-skip-browser-warning": "http://localhost:3000",
    },
  });
