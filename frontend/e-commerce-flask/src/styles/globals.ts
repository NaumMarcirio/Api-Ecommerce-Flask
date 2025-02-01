import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
}

body {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme.black};
}

body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}
    
`;
