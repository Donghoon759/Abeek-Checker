import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'; // css reset

const GlobalStyle = createGlobalStyle`
    ${reset};
`;

export default GlobalStyle;
