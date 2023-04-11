import Image from "next/image";
import React from "react";

const SearchItem = ({ name, imgUrl }) => {
  return (
    <div className="flex gap-[20px] bg-[#1F2122] py-2 pl-3 items-center text-white w-[400px]">
      <Image src={imgUrl} width={70} height={70} priority/>
      <h2>{name}</h2>
    </div>
  );
};

export default SearchItem;