import { motion } from "framer-motion";
import Link from "next/link";

const Sidebar = ({ sidebar }) => {
  return (
    <motion.div animate={{ width: sidebar ? "20rem" : "0px" }} id="sidebar">
      <ul className="py-40 flex flex-col justify-between items-end text-5xl h-[100%]">
        <Link href="/shop/crabs" className="hover:text-blue focus:text-blue transition-colors">
          CRABS
        </Link>
        <Link href="/shop/lobsters" className="hover:text-blue focus:text-blue transition-colors">
          LOBSTERS
        </Link>
        <Link href="/shop/fishes" className="hover:text-blue focus:text-blue transition-colors">
          FISHES
        </Link>
        <Link href="/shop/shrimps" className="hover:text-blue focus:text-blue transition-colors">
          SHRIMPS
        </Link>
        <Link href="/shop/clams" className="hover:text-blue focus:text-blue transition-colors">
          CLAMS
        </Link>
        <Link href="/shop/oysters" className="hover:text-blue focus:text-blue transition-colors">
          OYSTERS
        </Link>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
