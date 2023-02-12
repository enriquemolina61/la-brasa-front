import { DateTime } from "luxon";
import Search from "../../assets/icons/search.svg";
import Menu from "../../components/Menu";
import ProductList from "../../components/ProductList";
import { navItems } from "../../data/navigation";
import { RoutesPath } from "../../types/routes";
import * as S from "./style";

const Home = () => {
  const date = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });
  return (
    <S.Home>
      <Menu active={RoutesPath.HOME} navItems={navItems} />
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
            {/* <ProductItem
              name="X Egg Bacon"
              description="Hamburguer de carne bovina, ovo, bacon e queijo."
              price={10}
              image="https://harpersbazaar.uol.com.br/wp-content/uploads/2018/10/x-egg-sanduiche-02.jpg"
            /> */}
            <ProductList />
          </S.HomeProductList>
        </div>
      </S.HomeContent>
      <aside>
        <p>Detalhes dos pedidos aqui</p>
      </aside>
    </S.Home>
  );
};

export default Home;
