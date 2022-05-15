import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Raleway;
    }
    html {
        font-size: 62.5%;// Isso existe para que 1rem seja igual a 10px, caso não tiver usando rem pode apagar;
    }
    button {
        outline: none;
        border: none;
    }
`;
