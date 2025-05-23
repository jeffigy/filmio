import { useStore } from "@/store";
import { API_URL } from "@/utils/config";
import axios from "axios";
import { refresh } from "./authApi";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config; // failed request, allowing it to be retried after handling the error.
    const { token, setCredentials, clearCredentials } = useStore.getState();

    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true; // marks this request as already retried

      if (token) {
        try {
          const refreshedToken = await refresh();

          setCredentials(refreshedToken.token);
          originalRequest.headers.Authorization = `Bearer ${refreshedToken.token}`;

          // retry the original request
          return axiosInstance(originalRequest);
        } catch (error) {
          console.log("Session expired");
          clearCredentials();
          return Promise.reject(error);
        }
      }
    }

    if (error.response) {
      error.message = error.response.data.message ?? error.message;
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
