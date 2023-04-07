import { UserAuth } from "@/context/AuthContext";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { useSelector } from "react-redux";
import LoginSubheader from "./LoginSubheader";

const Header = () => {
  const products = useSelector((state) => state.products);
  const { user, logout } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sticky top-0 z-10 bg-grey h-12 flex justify-end flex-col items-center py-2 lgl:h-[120px] lgl:items-start">
      <div className="max-w-contentContainer m0a">
        {user ? (
          <div className="flex justify-end text-[#A1A7AD] gap-2 text-sm h-9">
            <p className="pr-2 cursor-pointer">help</p>
            <p onClick={handleSignOut} className="cursor-pointer">
              logout
            </p>
          </div>
        ) : (
          <LoginSubheader />
        )}
        <div className="navigation-title flex justify-between lgl:w-[1000px] xl:w-[1280px]">
          <Link href="/" className="text-3xl text-blue">
            NEW TYPE OCEAN
          </Link>
          <div id="main-search" className="flex gap-[10px] items-center">
            <div className="relative">
              <input
                type="text"
                className="px-2 w-[400px] h-[40px] bg-[#1F2122]"
                placeholder="Search..."
              />
              <SearchIcon className="absolute right-[5px] top-[8px]" />
            </div>
            <div className="relative">
              <LocalMallIcon />
              <span
                className={`absolute text-xs -top-1 left-4 w-5 h-5 rounded-full flex justify-center items-center ${
                  products && products.length > 0 ? "bg-blue" : ""
                }`}
              >
                {products.length > 0 ? products.length : ""}
              </span>
            </div>
          </div>
        </div>
        <div id="topNav">
          <ul className="flex text-white gap-[20px] tracking-wider">
            <li>LOBSTERS</li>
            <li>SHRIMPS</li>
            <li>CRABS</li>
            <li>FISH</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
