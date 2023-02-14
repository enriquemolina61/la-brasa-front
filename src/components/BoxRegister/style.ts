import styled, { css } from "styled-components";

export const BoxRegister = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.baseBg2};
    width: 330px;
    height: 550px;
    padding: 20px 20px 35px 20px;
    margin: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 3px 3px 6px 3px ${theme.colors.shadowColor};
    color: ${theme.colors.textColor};
    a {
      margin-top: 20px;
      color: ${theme.colors.textColor};
      text-decoration: none;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  `}
`;

export const BoxRegisterLogo = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `}
`;

export const BoxRegisterLogoImage = styled.img`
  ${() => css`
    width: 45%;
    cursor: pointer;
  `}
`;

export const BoxRegisterForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 15px;
    input {
      ${theme.mixins.input()};
      color: ${theme.colors.textColor};
    }
  `}
`;

export const BoxRegisterError = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor};
    text-align: center;
    display: inline-block;
    margin-top: 25px;
  `}
`;
