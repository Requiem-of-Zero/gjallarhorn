import Head from "next/head";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Banner from "../components/Banner/Banner";
import bannerData from "../components/Banner/data";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Products from "../components/Products/Products";
import productsData from "../components/ProductTile/data";

export default function Home({ theme, toggleTheme }) {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Head>
        <title>New Type Starfish Ocean</title>
        <meta name="description" content="Created by Samuel Wong." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Banner {...bannerData} />
        <Products {...productsData} />
        <Footer theme={theme} toggleTheme={toggleTheme} />
      </main>
    </>
  );
}
