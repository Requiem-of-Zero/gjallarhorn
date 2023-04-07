import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { AuthContextProvider } from "@/context/AuthContext";
import { Anek_Gujarati } from "next/font/google";
import { Router } from "next/router";
import NProgress from "nprogress";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { app } from "../firebase.config";
import { persistor, store } from "../redux/store";
import "../styles/globals.css";
import "../styles/nprogress.css";
import FooterNavigation from "@/components/Footer_Navigation/FooterNavigation";
const anek = Anek_Gujarati({ subsets: ["latin"], weight: "500" });
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Provider store={store} className={anek.className}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <FooterNavigation />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </AuthContextProvider>
  );
}
