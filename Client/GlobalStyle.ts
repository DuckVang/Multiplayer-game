import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

${reset}


* {
    background-color: rgba(200, 200, 200, 0.411);
    box-sizing: border-box;
    
}

html {
    height: 100vh;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
body {
    height: 100%;
    display: flex;
}

#root{
width: 100%;
height: 100%;

display: flex;
align-items: center;
justify-content: center;

}


`;
export default GlobalStyle;
