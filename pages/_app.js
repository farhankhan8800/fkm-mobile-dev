import { Roboto } from "@next/font/google";

import "styles/globals.css";
import theme from "public/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import Store from "../store/index.js";


const roboto = Roboto({
  weight: ["400", "700", "900", "900"],
  style: ["normal"],
  subsets: ["latin"],
});


function MyApp({ Component, pageProps }) {
 

  return (
    <ThemeProvider theme={theme}>
      <main className={roboto.className } style={{maxWidth:"600px", margin:"auto",position:"relative"}}>
        <Provider store={Store}>
         <Component {...pageProps} />
        </Provider>
      </main>
    
    </ThemeProvider>
  );
}

export default MyApp;
