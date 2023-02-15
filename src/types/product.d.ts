export type Product = {
  id?: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export type Users = {
  id?: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: number;
  image: string;
  isAdmin: boolean;
};

export type UpdateUserType = {
  id?: string;
  name: string;
  email: string;
  image: string;
};
