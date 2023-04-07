import { Router } from "next/router";
import NProgress from "nprogress";
import { Anek_Gujarati } from "next/font/google";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/globals.css";
import "../styles/nprogress.css";

const anek = Anek_Gujarati({ subsets: ["latin"], weight: "500" });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <main className={anek.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
