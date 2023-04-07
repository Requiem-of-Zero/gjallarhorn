import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 bg-grey w-screen h-12 flex justify-end flex-col items-center py-2 lgl:h-[120px] lgl:items-start">
      <div>
        <ul className="flex justify-end w-screen px-4 text-[#A1A7AD] gap-2 text-sm h-9">
          <li className="pr-2">help</li>
          <li>sign in</li>
          <li>/</li>
          <li>register</li>
        </ul>
      </div>
      <div className="navigation-title flex justify-between w-screen px-4">
        <h1 className="text-3xl text-blue">NEW TYPE OCEAN</h1>
        <div id="main-search" className="flex gap-[10px] items-center">
          <div className="relative">
            <input
              type="text"
              className="px-2 w-[400px] h-[40px] bg-[#1F2122]"
              placeholder="Search..."
            />
            <SearchIcon className="absolute right-[5px] top-[8px]" />
          </div>
          <LocalMallIcon />
        </div>
      </div>
      <div id="topNav">
        <ul className="flex text-white gap-[20px] tracking-wider px-4">
          <li>LOBSTERS</li>
          <li>SHRIMPS</li>
          <li>CRABS</li>
          <li>FISH</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
