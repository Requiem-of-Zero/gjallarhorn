import { AuthContextProvider } from "@/context/AuthContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Anek_Gujarati } from "next/font/google";
import { Router } from "next/router";
import NProgress from "nprogress";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../redux/store";
import "../styles/globals.css";
import "../styles/nprogress.css";
const anek = Anek_Gujarati({ subsets: ["latin"], weight: "500" });

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
        <ThemeProvider theme={theme}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </ThemeProvider>
      </Provider>
    </AuthContextProvider>
  );
}
