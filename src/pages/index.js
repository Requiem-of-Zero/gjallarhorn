import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products/Products";
import getEntryById from "../contentful/client";
import Header from "../components/Header/Header";

export const getServerSideProps = async () => {
  const banners = await getEntryById("JEKYG8KNcGOnz3uJt3Nhm");
  const products = await getEntryById("2wkr5VcBa9PYCsBQqvvvbl");

  return {
    props: {
      banners,
      products,
    },
  };
};

export default function Home({ banners, products }) {
  return (
    <>
      <Head>
        <title>Gjallahorn</title>
        <meta name="description" content="Seafood E-Commerce Application created by Samuel Wong." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header {...products} />
        <Banner {...banners} />
        <Products {...products} />
      </main>
    </>
  );
}
