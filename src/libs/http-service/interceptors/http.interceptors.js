import axios from "axios";
import toastr from "toastr";

export function configureHeaders() {
  axios.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem("token");
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );
}

export const configureInterceptors = () => {

  axios.interceptors.response.use(
    (response) => response,

    async (error) => {
      const originalRequest = error.config;

      if (error.response) {
        const { status, data } = error.response;

        console.error("API ERROR:", status, data);
      } else {
        toastr.error("Network error or server not responding!");
      }

      if (
        (error.response?.status === 498 || error.response?.status === 401) &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
        if (window.location.pathname !== "/auth") {
          localStorage.clear();
          window.location.href = "/auth";
        }
      }

      return Promise.reject(error);
    }
  );
};
