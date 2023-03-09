import { Roboto } from "@next/font/google";

import "styles/globals.css";
import theme from "public/theme";
import { ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import store from "../redux/store.js"
import { Provider } from "react-redux";


const roboto = Roboto({
  weight: ["400", "700", "900", "900"],
  style: ["normal"],
  subsets: ["latin"],
});



function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <main className={roboto.className}>
        <Container maxWidth="sm" sx={{ p: "0px" }}>
          <Provider store={store}>
          <Component {...pageProps} />
          </Provider>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
