import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { useState, useEffect } from "react";
import Bag from "../Bag/Bag";
import SearchItem from "../SearchItem/SearchItem";

const Search = ({ products }) => {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!e.target.value) {
      setData([]);
    } else {
      setKeyword(e.target.value.toLowerCase());
      setData(
        products.filter((product) => {
          return (
            product.fields.name.toLowerCase().includes(keyword) ||
            product.fields.name.toLowerCase().startsWith(keyword)
          );
        })
      );
    }
  };

  return (
    <div id="main-search" className="flex gap-[10px] items-center">
      <div className="relative">
        <input
          type="text"
          className="px-2 w-[400px] h-[40px] bg-[#1F2122] text-white outline-none"
          placeholder="Search..."
          onChange={handleSearch}
        />
        <SearchIcon className="absolute right-[5px] top-[8px]" />
        <div className="absolute">
          {data.map((product, i) => {
            const { name } = product.fields;
            const { url } = product.fields.image.fields.file;
            return (
              <SearchItem
                className="z-20"
                key={`search_result-${i}`}
                name={name}
                imgUrl={url}
              />
            );
          })}
        </div>
      </div>
      <Link href="/cart">
        <Bag />
      </Link>
    </div>
  );
};

export default Search;
