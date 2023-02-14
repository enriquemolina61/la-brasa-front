import * as S from "./style";
import logo from "../../assets/imgs/logo.png";
import ButtonLarge from "../../components/ButtonLarge";
import { login } from "../../utils/api/api";
import { useNavigate } from "react-router-dom";

const BoxLogin = () => {
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    const response = await login(data);

    if (response) {
      navigate("/");
    } else {
      alert("Usuário ou senha inválidos");
    }
  };

  return (
    <S.BoxLogin>
      <S.BoxLoginLogo>
        <S.BoxLoginLogoImage src={logo} alt="Logo" />
      </S.BoxLoginLogo>
      <S.BoxLoginForm onSubmit={handleSubmit}>
        <input type="text" placeholder="E-mail" name="email" />
        <input type="password" placeholder="Senha" name="password" />
        <ButtonLarge value="Entrar" type="submit" />
      </S.BoxLoginForm>
      <a onClick={() => navigate("/register")}>Cadastre-se</a>
    </S.BoxLogin>
  );
};

export default BoxLogin;
