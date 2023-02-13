import { DateTime } from "luxon";
import UsersList from "../../components/UsersList";
import Search from "../../assets/icons/search.svg";
import Menu from "../../components/Menu";

import { navItems } from "../../data/navigation";
import { RoutesPath } from "../../types/routes";
import * as S from "./style";

const Users = () => {
  const date = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });
  return (
    <S.Home>
      <Menu active={RoutesPath.USER} navItems={navItems} />
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
            <b>Produtos</b>
          </S.HomeProductTitle>
          <S.HomeProductList>
            <UsersList />
          </S.HomeProductList>
        </div>
      </S.HomeContent>
      <aside>
        <p>Detalhes dos pedidos aqui</p>
      </aside>
    </S.Home>
  );
};

export default Users;
