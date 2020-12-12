import {createGlobalStyle} from 'styled-components';
// import  from ;
const GlobalStyle = createGlobalStyle`

:root{
    --lightest-blue:#ebf8ff;
    --light-blue: #4299e1;
    --blue: #4299e1;
    --dark-blue:#2c5282;
    --light-gray:#e2e8f0;
    --dark-gray:#a0aec0;
    font-size:62.5%;
}
html,body{
    margin:0;
    padding:0;
    width: 100%;
    height: 100%;
}
*{
    box-sizing:border-box;
}
`
export default GlobalStyle;