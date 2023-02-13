import logo from "../../assets/imgs/logo.png";
import Logout from "../../assets/icons/logout.svg";
3;
import Home from "../../assets/icons/home.svg";
import Add from "../../assets/icons/add.svg";
import User from "../../assets/icons/users.svg";
import * as S from "./style";
import { RoutesPath } from "../../types/routes";
import { NavItem } from "./types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface MenuProps {
  active: RoutesPath;
  navItems: NavItem[];
}
type ActiveMenu = "Home" | "Add" | "User";
const Menu = ({}: MenuProps) => {
  const [active, setActive] = useState<ActiveMenu>("Home");
  const navigate = useNavigate();
  return (
    <S.Menu>
      <nav>
        <S.MenuLogo>
          <img src={logo} alt="Logo" />
        </S.MenuLogo>
        <S.MenuItem>
          <S.MenuItemButton
            onClick={() => {
              setActive("Home"), navigate("/");
            }}
            className={active == "Home" ? "active" : ""}
          >
            <img src={Home} alt="Home Component" />
          </S.MenuItemButton>
        </S.MenuItem>

        <S.MenuItem>
          <S.MenuItemButton
            onClick={() => {
              setActive("Add"), navigate("/create-product");
            }}
            className={active == "Add" ? "active" : ""}
          >
            <img src={Add} alt="Add Component" />
          </S.MenuItemButton>
        </S.MenuItem>

        <S.MenuItem>
          <S.MenuItemButton
            onClick={() => {
              setActive("User"),
                navigate("/product/3016dbd0-7eb1-4e44-8f62-696257d281d0");
            }}
            type="button"
            className={active == "User" ? "active" : ""}
          >
            <img src={User} alt="User Component" />
          </S.MenuItemButton>
        </S.MenuItem>
      </nav>
      <S.MenuItemLogout>
        <img src={Logout} alt="Logout Component" />
      </S.MenuItemLogout>
    </S.Menu>
  );
};

export default Menu;
