import axios from "axios";

const $axios = axios.create({
  baseURL: "https://dsapi.neuropublic.gr/dgagro",
});

$axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

$axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    navigateTo("/error");
  }
);

export { $axios };
