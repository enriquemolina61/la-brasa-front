import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        scroll-behavior: smooth;
        overflow: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
`;
