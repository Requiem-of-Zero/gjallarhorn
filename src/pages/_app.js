import { Anek_Gujarati } from "next/font/google";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/globals.css";

const anek = Anek_Gujarati({ subsets: ["latin"], weight: "500" });

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <main className={anek.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
