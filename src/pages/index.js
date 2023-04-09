import Banner from "@/components/Banner/Banner";
import bannerData from "@/components/Banner/data";
import Footer from "@/components/Footer/Footer";
import FooterNavigation from "@/components/Footer_Navigation/FooterNavigation";
import Header from "@/components/Header/Header";
import Products from "@/components/Products/Products";
import productsData from "@/components/ProductTile/data";
import Sidebar from "@/components/Sidebar/Sidebar";
import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <Head>
        <title>New Type Starfish Ocean</title>
        <meta name="description" content="Created by Samuel Wong." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {sidebar && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: sidebar ? 0.8 : 0 }}
          className="bg-[black] w-screen h-screen fixed z-20 opacity-0"
          onClick={() => setSidebar(false)}
        ></motion.div>
      )}
      <main>
        <Header />
        <Banner {...bannerData} />
        <Products {...productsData} />
        <Footer />
        {sidebar && <Sidebar sidebar={sidebar} />}
        <FooterNavigation setSidebar={setSidebar} sidebar={sidebar} />
      </main>
    </>
  );
}
