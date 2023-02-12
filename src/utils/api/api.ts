import axios from "axios";

axios.defaults.baseURL = "https://la-brasa-server-production.up.railway.app/";

axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("accessToken");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post("/auth", {
      email,
      password,
    });
    if (response.status === 200) {
      localStorage.setItem("acessToken", response.data.token);
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};