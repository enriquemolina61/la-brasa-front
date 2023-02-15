import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Search from "../../assets/icons/search.svg";
import Menu from "../../components/Menu";
import { navItems } from "../../data/navigation";
import { Users } from "../../types/product";
import { RoutesPath } from "../../types/routes";
import { deleteUser, getUserById, updateUser } from "../../utils/api/api";
import * as S from "./style";

const UpdateUser = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [user, setUser] = useState<Users>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    cpf: 0,
    image: "",
    isAdmin: false,
  });
  const date = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });
  const params = useParams();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget) as any;
    const data: Users = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      cpf: +formData.get("cpf"),
      image: formData.get("image") as string,
      confirmPassword: formData.get("password") as string,
      isAdmin: false,
    };
    if (JSON.stringify(data) === JSON.stringify(user)) {
      alert("Nenhum dado foi alterado!");
      return;
    }

    await updateUser(params.id as string, data);
  };
  const handleDelete = async () => {
    await deleteUser(params.id as string);
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  useEffect(() => {
    const getById = async () => {
      const response = await getUserById(params.id as string);
      setUser({
        name: response.name,
        email: response.email,
        password: response.password,
        cpf: response.cpf,
        image: response.image,
        confirmPassword: response.password,
        isAdmin: false,
      });
      console.log(response);

      setIsLoaded(true);
    };
    getById();
  }, []);

  return (
    <S.Home>
      <Menu active={RoutesPath.PRODUCT} navItems={navItems} />
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>La Brasa</S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>{date}</S.HomeHeaderDetailsDate>
            </div>
            <S.HomeHeaderDetailsSearch>
              <img src={Search} alt="Search Component" />
              <input type="text" placeholder="Procure pelo sabor" />
            </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeUserTitle>
            <b>Hamburguers</b>
          </S.HomeUserTitle>

          {isLoaded && (
            <S.HomeUserList>
              <form action="submit" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Nome"
                  name="name"
                  defaultValue={user.name}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  defaultValue={user.email}
                />
                <input
                  type="text"
                  placeholder="Senha"
                  name="password"
                  defaultValue={user.password}
                />

                <input
                  type="text"
                  placeholder="Imagem do usuário"
                  name="image"
                  defaultValue={user.image}
                />
                <button type="submit">Salvar</button>
                <button type="button" onClick={handleDelete}>
                  Deletar Usuário
                </button>
              </form>
            </S.HomeUserList>
          )}
        </div>
      </S.HomeContent>
      <aside></aside>
    </S.Home>
  );
};

export default UpdateUser;
