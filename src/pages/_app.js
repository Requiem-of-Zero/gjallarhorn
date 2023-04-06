import "../styles/globals.css";

import { Anek_Gujarati } from "next/font/google";

const anek = Anek_Gujarati({ subsets: ["latin"], weight: "500" });
export default function App({ Component, pageProps }) {
  return (
    <main className={anek.className}>
      <Component {...pageProps} />
    </main>
  );
}
