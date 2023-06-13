import { Roboto } from "@next/font/google";

import "styles/globals.css";
import theme from "public/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import Store from "../store/index.js";
// import { SessionProvider, session } from "next-auth/react";
import ScrollButton from "components/utilites/BottomToTop.js";
import Footer from "components/Footer.js";
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

const roboto = Roboto({
  weight: ["400", "700", "900", "900"],
  style: ["normal"],
  subsets: ["latin"],
});
// const firebaseConfig = {};

// const fkmApp = initializeApp(firebaseConfig);
// const fkmAuth = getAuth(fkmApp);
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <SessionProvider session={session}>
         
        </SessionProvider> */}
        <main
          className={roboto.className}
          style={{ maxWidth: "600px", margin: "auto", position: "relative" }}
        >
          <Provider store={Store}>
            <div className="ComponentsHeight">
              <Component {...pageProps} />
            </div>
            {/* <Component {...pageProps} /> */}
            <ScrollButton />
            <Footer />
          </Provider>
        </main>
      </ThemeProvider>
      <style jsx>{`
        .ComponentsHeight {
          min-height: 90vh;
        }
      `}</style>
    </>
  );
}

export default MyApp;
