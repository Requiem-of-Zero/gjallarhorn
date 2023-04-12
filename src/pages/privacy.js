import getEntryById from "../contentful/client";
import Header from "../components/Header/Header";

export async function getServerSideProps() {
  const products = await getEntryById("2wkr5VcBa9PYCsBQqvvvbl");

  return {
    props: {
      products,
    },
  };
}

export default function Privacy({ products }) {
  return (
    <div>
      <div className="w-screen min-h-screen">
        <Header {...products} />
        <h1 className="text-white">Privacy Policy</h1>
      </div>
    </div>
  );
}
