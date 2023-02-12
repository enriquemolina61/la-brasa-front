import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Search from "../../assets/icons/search.svg";
import Menu from "../../components/Menu";
import { navItems } from "../../data/navigation";
import { Product } from "../../types/product";
import { RoutesPath } from "../../types/routes";
import { getProductById } from "../../utils/api/api";
import * as S from "./style";

const ProductPage = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [product, setProduct] = useState<Product>({
    name: "",
    description: "",
    price: 0,
    image: "",
  });
  const date = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });
  const params = useParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: formData.get("price") as unknown as number,
      image: formData.get("image"),
    };
    console.log(data);
  };
  useEffect(() => {
    const getById = async () => {
      const response = await getProductById(params.id as string);
      setProduct({
        name: response.name,
        description: response.description,
        price: response.price,
        image: response.image,
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
          <S.HomeProductTitle>
            <b>Hamburguers</b>
          </S.HomeProductTitle>

          {isLoaded && (
            <S.HomeProductList>
              <form action="submit" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Nome do produto"
                  name="name"
                  defaultValue={product.name}
                />
                <input
                  type="text"
                  placeholder="Descrição do produto"
                  name="description"
                  defaultValue={product.description}
                />
                <input
                  type="number"
                  min={"0"}
                  step={"0.01"}
                  placeholder="Preço do produto"
                  name="price"
                  defaultValue={product.price}
                />
                <input
                  type="text"
                  placeholder="Imagem do produto"
                  name="image"
                  defaultValue={product.image}
                />
                <button type="submit">Salvar</button>
              </form>
            </S.HomeProductList>
          )}
        </div>
      </S.HomeContent>
      <aside>
        <p>Detalhes dos pedidos aqui</p>
      </aside>
    </S.Home>
  );
};

export default ProductPage;
