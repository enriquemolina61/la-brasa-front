import * as S from "./style";
import logo from "../../assets/imgs/logo.png";
import ButtonLarge from "../ButtonLarge";
import { createUser } from "../../utils/api/api";
import { useNavigate } from "react-router-dom";
import { Users } from "src/types/product";

const BoxRegister = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget) as any;
    const data: Users = {
      name: formData.get("name") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
      cpf: formData.get("cpf") as number,
      email: formData.get("email") as string,
      image: formData.get("image") as string,
      isAdmin: false,
    };
    console.log(data);
    if (
      data.name === "" ||
      data.image === "" ||
      data.password === "" ||
      data.email === ""
    ) {
      alert("Preencha todos os campos!");
      return;
    }
    if (data.password !== data.confirmPassword) {
      alert("Senhas não conferem!");
      return;
    }
    if (data.cpf.toString().length !== 11) {
      alert("CPF inválido!");
      return;
    }

    const response = await createUser(data);
    if (response) {
      navigate("/login");
    }
  };

  return (
    <S.BoxRegister>
      <S.BoxRegisterLogo>
        <S.BoxRegisterLogoImage
          src={logo}
          alt="Logo"
          onClick={() => navigate("/login")}
        />
      </S.BoxRegisterLogo>
      <S.BoxRegisterForm onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" name="name" />
        <input type="text" placeholder="E-mail" name="email" />
        <input type="password" placeholder="Senha" name="password" />
        <input
          type="password"
          placeholder="Confirmar Senha"
          name="confirmPassword"
        />
        <input type="text" placeholder="CPF" name="cpf" />
        <input type="text" placeholder="Imagem do usuário" name="image" />
        <ButtonLarge value="Cadastrar" type="submit" />
      </S.BoxRegisterForm>
    </S.BoxRegister>
  );
};

export default BoxRegister;
