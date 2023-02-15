import axios from "axios";
import { Product, UpdateUserType } from "../../types/product";

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
      localStorage.setItem("accessToken", response.data.token);
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get("/product");
    return response.data;
  } catch (error) {
    return [];
  }
};

export const getProductById = async (id: string) => {
  try {
    const response = await axios.get(`/product/${id}`);
    return response.data;
  } catch (error) {
    return [];
  }
};

export const updateProduct = async (id: string, product: Product) => {
  try {
    const response = await axios.patch(`/product/${id}`, product);
  } catch (error) {}
};

export const deleteProduct = async (id: string) => {
  try {
    const response = await axios.delete(`/product/${id}`);
  } catch (error) {}
};

export const createProduct = async (product: Product) => {
  try {
    const response = await axios.post(`/product`, product);
    if (response.status === 201) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get("/user");
    return response.data;
  } catch (error) {
    return [];
  }
};

export const createUser = async ({
  email,
  password,
  confirmPassword,
  cpf,
  image,
  name,
  isAdmin,
}: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: number;
  isAdmin: boolean;
  image: string;
}) => {
  try {
    const response = await axios.post("/user", {
      name,
      email,
      cpf,
      password,
      confirmPassword,
      image,
      isAdmin,
    });
    if (response.status === 201) {
      return true;
    }
    return false;
  } catch (error) {
    alert(
      "Erro de cadastro, tente novamente. Ou seu cpf já existe. Colocar link de imagem válida. Senha deve ter no mínimo 6 caracteres, uma letra maiúscula , um número e um caractere especial."
    );
    console.log(error);

    return false;
  }
};

export const updateUser = async (id: string, updatedUser: UpdateUserType) => {
  try {
    const response = await axios.patch(`/user/${id}`, updatedUser);
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);

    return false;
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = await axios.delete(`/user/${id}`);
  } catch (error) {}
};

export const getUserById = async (id: string) => {
  try {
    const response = await axios.get(`/user/${id}`);
    return response.data;
  } catch (error) {
    return [];
  }
};
