import styled, { css } from "styled-components";

export const Register = styled.section`
  ${({ theme }) => css`
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    background-color: ${theme.colors.baseLogin};
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
  `}
`;

export const RegisterContent = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    ${theme.mixins.overlay()};
    display: flex;
    justify-content: center;
    align-items: center; ;
  `}
`;
