import Banner from "@/components/Banner/Banner";
import bannerData from "@/components/Banner/data";
import Products from "@/components/Products/Products";
import productsData from "@/components/ProductTile/data";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>New Type Starfish Ocean</title>
        <meta name="description" content="Created by Samuel Wong." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner {...bannerData} />
        <Products {...productsData} />
      </main>
    </>
  );
}
