import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

${reset}

* {
    background-color: rgba(246, 160, 0, 0.411);
}

html {
    height: 100vh;
}
body {
    height: 100%;
    display: flex;
}

main {
    margin: auto;

    width: 450px;
    height: 300px;

    display: flex;

    .left {
        background-color: rgba(0, 0, 255, 0.152);
        flex: 1;
        display: flex;
        
        flex-direction: column;
        button {
        }
    }
    .right {
        flex: 1;
    }
}
`;
export default GlobalStyle;
