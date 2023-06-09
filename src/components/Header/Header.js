import { resetCart } from "../../redux/reducers/cartSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { UserAuth } from "../../context/AuthContext";
import Search from "../Search/Search";
import LoginSubheader from "./LoginSubheader";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  const products = await getEntryById("2wkr5VcBa9PYCsBQqvvvbl");

  return {
    props: {
      products,
    },
  };
};

const Header = ({ products }) => {
  const { user, logout } = UserAuth();
  const cartProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sticky top-0 navigation_bar pb-2 z-[100] bg-grey h-12 flex justify-end flex-col items-center shadow-lg lgl:pb-0 lgl:h-[120px] lgl:items-start">
      {/* Header Login Bar */}
      <div className="max-w-contentContainer m0a">
        {user ? (
          <ul
            id="subheader"
            className="flex justify-end text-[#A1A7AD] gap-2 text-sm h-9 "
          >
            <Link href="/help" className="cursor-pointer hover:text-white">
              help
            </Link>
            <Link href="/profile" className="cursor-pointer hover:text-white">
              {`welcome back, ${user.displayName?.split(" ")[0] || user.email}`}
            </Link>
            <li>
              <p
                onClick={() => {
                  handleSignOut();
                  router.push("/");
                  dispatch(resetCart(cartProducts));
                }}
                className="cursor-pointer hover:text-white"
              >
                sign out
              </p>
            </li>
          </ul>
        ) : (
          <LoginSubheader />
        )}
        {/* End Header Login Bar */}
        {/* Search Bar and Title */}
        <div className="navigation-title flex justify-between lgl:w-[1000px] xl:w-[1280px]">
          <Link href="/" className="text-3xl text-blue" id="header_title">
            GJALLARHORN
          </Link>
          <Search products={products} />
        </div>
        {/* End Search Bar and Title */}
        {/* Header Navigation */}
        <div id="topNav">
          <nav className="flex text-white gap-[20px] tracking-widest">
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
          </nav>
        </div>
        {/* End Header Navigation */}
      </div>
    </div>
  );
};

export default Header;
