import { UserAuth } from "@/context/AuthContext";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Bag from "../Bag/Bag";
import LoginSubheader from "./LoginSubheader";
import { resetCart } from "@/redux/reducers/cartSlice";

const Header = () => {
  const { user, logout } = UserAuth();
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  
  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="navigation_bar pb-2 sticky top-0 z-10 bg-grey h-12 flex justify-end flex-col items-center lgl:pb-0 lgl:h-[120px] lgl:items-start">
      {/* Header Login Bar */}
      <div className="max-w-contentContainer m0a">
        {user ? (
          <div
            id="subheader"
            className="flex justify-end text-[#A1A7AD] gap-2 text-sm h-9"
          >
            <Link href="/help" className="pr-2 cursor-pointer hover:text-white">
              help
            </Link>
            <p
              onClick={() => {  
                handleSignOut()
                dispatch(resetCart(products))
              }}
              className="cursor-pointer hover:text-white"
            >
              logout
            </p>
          </div>
        ) : (
          <LoginSubheader />
        )}
        {/* End Header Login Bar */}
        {/* Search Bar and Title */}
        <div className="navigation-title flex justify-between lgl:w-[1000px] xl:w-[1280px]">
          <Link href="/" className="text-3xl text-blue">
            GHALLAJORN
          </Link>
          <div id="main-search" className="flex gap-[10px] items-center">
            <div className="relative">
              <input
                type="text"
                className="px-2 w-[400px] h-[40px] bg-[#1F2122] text-white"
                placeholder="Search..."
              />
              <SearchIcon className="absolute right-[5px] top-[8px]" />
            </div>
            <Link href="/cart">
              <Bag />
            </Link>
          </div>
        </div>
        {/* End Search Bar and Title */}
        {/* Header Navigation */}
        <div id="topNav">
          <ul className="flex text-white gap-[20px] tracking-widest">
            <Link
              href="/shop/lobsters"
              className="transition duration-150 border-b-4 border-[transparent] hover:border-b-4 hover:border-[white] pb-1"
            >
              LOBSTERS
            </Link>
            <Link
              href="/shop/shrimps"
              className="transition duration-150 border-b-4 border-[transparent] hover:border-b-4 hover:border-[white] pb-1"
            >
              SHRIMPS
            </Link>
            <Link
              href="/shop/crabs"
              className="transition duration-150 border-b-4 border-[transparent] hover:border-b-4 hover:border-[white] pb-1"
            >
              CRABS
            </Link>
            <Link
              href="/shop/fish"
              className="transition duration-150 border-b-4 border-[transparent] hover:border-b-4 hover:border-[white] pb-1"
            >
              FISH
            </Link>
          </ul>
        </div>
        {/* End Header Navigation */}
      </div>
    </div>
  );
};

export default Header;
