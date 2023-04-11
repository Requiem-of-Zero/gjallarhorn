import { AuthContextProvider } from "../context/AuthContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
import Layout from "../components/Layout/Layout";
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
              <div id={theme}>
                <Layout
                  theme={theme}
                  sidebar={sidebar}
                  setSidebar={setSidebar}
                  toggleTheme={toggleTheme}
                >
                  <Component
                    {...pageProps}
                    theme={theme}
                    toggleTheme={toggleTheme}
                  />
                </Layout>
              </div>
            </ThemeContext.Provider>
          </PersistGate>
        </ThemeProvider>
      </Provider>
    </AuthContextProvider>
  );
}
