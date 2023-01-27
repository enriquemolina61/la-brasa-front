import { NavItem } from "components/Menu/types";
import Home from "../assets/icons/home.svg";
import Settings from "../assets/icons/settings.svg";
import { RoutesPath } from "../../src/types/routes";

export const navItems: NavItem[] = [
  {
    icon: <img src={Home} alt="Home Component" />,
    path: RoutesPath.HOME,
  },
  {
    icon: <img src={Settings} alt="Settings Component" />,
    path: RoutesPath.SETTINGS,
  },
];
