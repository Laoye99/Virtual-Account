import axios from "axios";

export const baseUrl = "https://b0f4-102-88-63-74.ngrok-free.app/nip";

export const ubaApi = axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "multipart/form-data",
      "ngrok-skip-browser-warning": "http://localhost:3000",
    },
  });
