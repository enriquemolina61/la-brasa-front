import Menu from "../../components/Menu";
import { DateTime } from "luxon";
import Search from "../../assets/icons/search.svg";
import * as S from "./style";
import { RoutesPath } from "../../types/routes";
import { navItems } from "../../data/navigation";

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
            <p>Lista de produtos aqui</p>
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
