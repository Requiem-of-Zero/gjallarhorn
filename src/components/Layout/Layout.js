import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FooterNavigation from "../Footer_Navigation/FooterNavigation";
import Sidebar from "../Sidebar/Sidebar";
import { motion } from "framer-motion";

export const getStaticProps = async () => {
  const banners = await getEntryById("JEKYG8KNcGOnz3uJt3Nhm");
  const products = await getEntryById("2wkr5VcBa9PYCsBQqvvvbl");

  return {
    props: {
      banners,
      products,
    },
  };
};

export default function Layout({
  children,
  theme,
  setSidebar,
  sidebar,
  toggleTheme,
  banners,
  products
}) {
  return (
    <>
      <Header products={products}/>
      {sidebar && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: sidebar ? 0.8 : 0 }}
          className="bg-[black] w-screen h-screen fixed z-20 opacity-0"
          onClick={() => setSidebar(false)}
        ></motion.div>
      )}
      <main banners={banners} products={products}>{children}</main>
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
