import { DateTime } from "luxon";
import { useNavigate } from "react-router-dom";
import Search from "../../assets/icons/search.svg";
import Menu from "../../components/Menu";
import { navItems } from "../../data/navigation";
import { Product } from "../../types/product";
import { RoutesPath } from "../../types/routes";
import * as S from "./style";

const CreateProductPage = () => {
  const navigate = useNavigate();
  const date = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget) as any;
    const data: Product = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      price: +formData.get("price"),
      image: formData.get("image") as string,
    };
  };

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
          <S.HomeProductTitle>
            <b>Hamburguers</b>
          </S.HomeProductTitle>

          <S.HomeProductList>
            <form action="submit" onSubmit={handleSubmit}>
              <input type="text" placeholder="Nome do produto" name="name" />
              <input
                type="text"
                placeholder="Descrição do produto"
                name="description"
              />
              <input
                type="number"
                min={"0"}
                step={"0.01"}
                placeholder="Preço do produto"
                name="price"
              />
              <input type="text" placeholder="Imagem do produto" name="image" />
              <button type="submit">Criar</button>
            </form>
          </S.HomeProductList>
        </div>
      </S.HomeContent>
      <aside>
        <p>Detalhes dos pedidos aqui</p>
      </aside>
    </S.Home>
  );
};

export default CreateProductPage;
