import Image from "next/image";
import React from "react";
import Link from "next/link";

const SearchItem = ({ name, imgUrl, id }) => {
  return (
    <Link href={`/show/${id}`} className="search_item flex gap-[20px] bg-[#1F2122] py-2 pl-3 items-center text-white w-[400px]">
      <Image
        src={`http:${imgUrl}`}
        width={70}
        height={70}
        priority
        alt="search-item"
      />
      <h2>{name}</h2>
    </Link>
  );
};

export default SearchItem;