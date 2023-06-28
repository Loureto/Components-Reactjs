import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: Poppins, sans-serif, Arial, Helvetica;
    }

    html,
    body {
        max-width: 100vw;
        background-color: #FFF;
    }

    li,
    ul,
    a {
        list-style: none;
        text-decoration: none;
    }
`;
