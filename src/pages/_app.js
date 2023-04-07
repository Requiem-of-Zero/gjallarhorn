import { Anek_Gujarati } from "next/font/google";
import { Router } from "next/router";
import NProgress from "nprogress";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.css";
import "../styles/nprogress.css";
import { persistor, store } from "../redux/store";

const anek = Anek_Gujarati({ subsets: ["latin"], weight: "500" });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
  return (
      <Provider store={store} className={anek.className}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
  );
}
