import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Search from "../../assets/icons/search.svg";
import Menu from "../../components/Menu";
import { navItems } from "../../data/navigation";
import { Product } from "../../types/product";
import { RoutesPath } from "../../types/routes";
import {
  deleteProduct,
  getProductById,
  updateProduct,
} from "../../utils/api/api";
import * as S from "./style";

const ProductPage = () => {
  const navigate = useNavigate();
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget) as any;
    const data: Product = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      price: +formData.get("price"),
      image: formData.get("image") as string,
    };
    if (JSON.stringify(data) === JSON.stringify(product)) {
      alert("Nenhum dado foi alterado!");
      return;
    }

    await updateProduct(params.id as string, data);
  };
  const handleDelete = async () => {
    await deleteProduct(params.id as string);
    navigate("/");
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
            <b>Editando Produto</b>
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
                <button className="delete" type="button" onClick={handleDelete}>
                  Deletar Produto
                </button>
              </form>
            </S.HomeProductList>
          )}
        </div>
      </S.HomeContent>
      <aside></aside>
    </S.Home>
  );
};

export default ProductPage;
