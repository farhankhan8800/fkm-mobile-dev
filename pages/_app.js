import { Roboto } from "@next/font/google";

import "styles/globals.css";
import theme from "public/theme";
import { ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";

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
          <Component {...pageProps} />
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
