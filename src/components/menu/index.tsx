import logo from "../../assets/imgs/logo.png";
import Logout from "../../assets/icons/logout.svg";
import * as S from "./style";
import { RoutesPath } from "types/routes";
import { NavItem } from "./types";

interface MenuProps {
  active: RoutesPath;
  navItems: NavItem[];
}
const Menu = ({ active, navItems }: MenuProps) => {
  return (
    <S.Menu>
      <nav>
        <S.MenuLogo>
          <img src={logo} alt="Logo" />
        </S.MenuLogo>
        {navItems.map((item, index) => (
          <S.MenuItem key={`MenuItem-${index}`} active={item.path === active}>
            <S.MenuItemButton active={item.path === active}>
              {item.icon}
            </S.MenuItemButton>
          </S.MenuItem>
        ))}
      </nav>
      <S.MenuItemLogout>
        <img src={Logout} alt="Logout Component" />
      </S.MenuItemLogout>
    </S.Menu>
  );
};

export default Menu;
