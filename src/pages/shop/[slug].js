import { useRouter } from "next/router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import productsData from '../../components/ProductTile/data';
import ProductTile from "../../components/ProductTile/ProductTile";
import "react-toastify/dist/ReactToastify.css";

export default function ProductDetail() {
  const router = useRouter();
  const productType = router.query.slug

  const handleProducts = (catalog) => {
    if(productType === 'lobsters'){
      return catalog.products.filter((item) => item.type === 2)
    } else if (productType === 'shrimps'){
      return catalog.products.filter((item) => item.type === 4)
    } else if (productType === 'crabs'){
      return catalog.products.filter((item) => item.type === 3);
    } else if (productType === 'fish'){
      return catalog.products.filter((item) => item.type === 5);
    }
  }

  const products = handleProducts(productsData)

  return (
    <main className="min-h-screen w-screen">
      <Header />
      <div className="min-h-screen py-10 px-10 flex gap-[40px]">
        {products.map((product) => <ProductTile width={300} height={300} {...product}/>)}
      </div>
      <Footer />
    </main>
  );
}
