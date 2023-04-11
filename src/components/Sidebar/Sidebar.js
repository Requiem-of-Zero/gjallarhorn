import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { UserAuth } from "../../context/AuthContext";
import { resetCart } from "../../redux/reducers/cartSlice";

const Sidebar = ({ sidebar, setSidebar }) => {
  const { logout } = UserAuth();
  const dispatch = useDispatch();
  const router = useRouter();

  const products = useSelector((state) => state.products)
  
  return (
    <motion.div animate={{ width: sidebar ? "15rem" : "0px" }} id="sidebar">
      <ul className="py-40 pr-5 flex flex-col justify-between items-end text-3xl h-[100%] ">
        <Link
          href="/shop/crabs"
          className="hover:text-blue focus:text-blue transition-colors"
        >
          CRABS
        </Link>
        <Link
          href="/shop/lobsters"
          className="hover:text-blue focus:text-blue transition-colors"
        >
          LOBSTERS
        </Link>
        <Link
          href="/shop/fish"
          className="hover:text-blue focus:text-blue transition-colors"
        >
          FISHES
        </Link>
        <Link
          href="/shop/shrimps"
          className="hover:text-blue focus:text-blue transition-colors"
        >
          SHRIMPS
        </Link>
        <Link
          href="/shop/clams"
          className="hover:text-blue focus:text-blue transition-colors"
        >
          CLAMS
        </Link>
        <li
          className="hover:text-blue focus:text-blue transition-colors"
          onClick={() => {
            logout();
            router.push("/");
            dispatch(resetCart(products));
            setSidebar(false)
          }}
        >
          LOGOUT
        </li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
