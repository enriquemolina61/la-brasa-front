import { NavItem } from "../components/Menu/types";
import Home from "../assets/icons/home.svg";
import Add from "../assets/icons/users.svg";
import { RoutesPath } from "../types/routes";

export const navItems: NavItem[] = [
  {
    icon: <img src={Home} alt="Home Component" />,
    path: RoutesPath.HOME,
  },
  {
    icon: <img src={Add} alt="Settings Component" />,
    path: RoutesPath.SETTINGS,
  },
];
