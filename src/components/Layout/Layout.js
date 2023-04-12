import Footer from "../Footer/Footer";
import FooterNavigation from "../Footer_Navigation/FooterNavigation";
import Sidebar from "../Sidebar/Sidebar";
import { motion } from "framer-motion";

export default function Layout({
  children,
  theme,
  setSidebar,
  sidebar,
  toggleTheme,
}) {
  return (
    <>
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
