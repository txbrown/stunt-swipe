import * as React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Reset } from "./Reset";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

interface IThemeProps {}

const Theme: React.FunctionComponent<IThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
