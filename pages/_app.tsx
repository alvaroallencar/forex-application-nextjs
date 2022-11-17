import type { AppProps } from "next/app";
import { ContextProvider } from "../src/contexts";
import GlobalStyle from "../src/styles/GlobalStyle";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ContextProvider>
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </ContextProvider>
  );
};

export default App;
