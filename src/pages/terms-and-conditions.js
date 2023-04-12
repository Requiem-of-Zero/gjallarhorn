import Header from "../components/Header/Header";
import getEntryById from "../contentful/client";

export async function getServerSideProps() {
  const products = await getEntryById("2wkr5VcBa9PYCsBQqvvvbl");

  return {
    props: {
      products,
    },
  };
}

export default function Terms({products}) {
  return (
    <div>
      <div className="w-screen min-h-screen">
        <Header {...products}/>
        <h1 className="text-white">Terms and Conditions</h1>
      </div>
    </div>
  );
}
