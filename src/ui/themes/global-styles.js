import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-size: 14px;
    line-height: 1.4;
    font-family:  "Basic","Anton", "Overpass", sans-serif;
    margin: 0;
    height: 100vh;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.background};;
    height: 100%;
  }
  
  #root {
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    height: 100vh;
    overflow: hidden;
  }`;
