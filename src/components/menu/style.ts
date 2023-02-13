import styled, { css } from "styled-components";
import { Theme } from "../../types/styled-components";

export const Menu = styled.menu`
  ${({ theme }) => css`
    margin: 0;
    padding: 20px 0;
    height: 100vh;
    width: 105px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: ${theme.colors.baseBg2};
    border-radius: 0 16px 16px 0;
    box-sizing: border-box;
    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  `}
`;

export const MenuLogo = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    padding: 0 0 20px 0;
    img {
      height: 80px;
    }
  `}
`;
export const MenuItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  `}
`;

export const MenuItemButton = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.buttonIcon()};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    &:hover {
      background: ${theme.colors.baseBg1};
    }
  `}
`;

export const MenuItemLogout = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.buttonIcon()};
    z-index: 1;
  `}
`;
