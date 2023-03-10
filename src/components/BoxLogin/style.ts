import styled, { css } from "styled-components";

export const BoxLogin = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.baseBg2};
    width: 330px;
    height: 414px;
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

export const BoxLoginLogo = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `}
`;

export const BoxLoginLogoImage = styled.img`
  ${() => css`
    width: 45%;
  `}
`;

export const BoxLoginForm = styled.form`
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

export const BoxLoginError = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor};
    text-align: center;
    display: inline-block;
    margin-top: 25px;
  `}
`;
