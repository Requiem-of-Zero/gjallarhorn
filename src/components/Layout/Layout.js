import Footer from "../Footer/Footer";
import FooterNavigation from "../Footer/Footer_Navigation/FooterNavigation";
import Sidebar from "../Footer/Footer_Navigation/Sidebar/Sidebar";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Layout({
  children,
  theme,
  setSidebar,
  sidebar,
  toggleTheme,
}) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap"
          rel="stylesheet"
        />
      </Head>
      {sidebar && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: sidebar ? 0.8 : 0 }}
          className="bg-[black] w-screen h-screen fixed z-20 opacity-0"
          onClick={() => setSidebar(false)}
        ></motion.div>
      )}
      <main>{children}</main>
      <Footer theme={theme} toggleTheme={toggleTheme} />
      {sidebar && <Sidebar sidebar={sidebar} setSidebar={setSidebar} />}
      <FooterNavigation
        theme={theme}
        sidebar={sidebar}
        setSidebar={setSidebar}
      />
    </>
  );
}
