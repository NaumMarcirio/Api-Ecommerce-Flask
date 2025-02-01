import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaults";
import { GlobalStyle } from "./styles/globals";
import { DefaultLayout } from "./layouts/defaultLayout/defaultLayout";

export const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <DefaultLayout />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
