import FooterNavigation from "@/components/Footer_Navigation/FooterNavigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import { AuthContextProvider } from "@/context/AuthContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Anek_Gujarati } from "next/font/google";
import { Router } from "next/router";
import NProgress from "nprogress";
import { useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../redux/store";
import "../styles/globals.css";
import "../styles/nprogress.css";
const anek = Anek_Gujarati({ subsets: ["latin"], weight: "500" });
import { createContext } from "react";

export const ThemeContext = createContext(null);

const inputTheme = createTheme({
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
  const [sidebar, setSidebar] = useState(false);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((currTheme) => (currTheme === "light" ? "dark" : "light"));
  };

  return (
    <AuthContextProvider>
      <Provider store={store} className={anek.className}>
        <ThemeProvider theme={inputTheme}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
              {sidebar && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: sidebar ? 0.8 : 0 }}
                  className="bg-[black] w-screen h-screen fixed z-20 opacity-0"
                  onClick={() => setSidebar(false)}
                ></motion.div>
              )}
              <div id={theme}>
                <Component {...pageProps} toggleTheme={toggleTheme} />
                {sidebar && <Sidebar sidebar={sidebar} />}
                <FooterNavigation
                  theme={theme}
                  sidebar={sidebar}
                  setSidebar={setSidebar}
                />
              </div>
            </ThemeContext.Provider>
          </PersistGate>
        </ThemeProvider>
      </Provider>
    </AuthContextProvider>
  );
}
