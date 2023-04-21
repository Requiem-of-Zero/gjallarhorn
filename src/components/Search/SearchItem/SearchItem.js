import Image from "next/image";
import React from "react";
import Link from "next/link";

const SearchItem = ({ name, imgUrl, id }) => {
  return (
    <Link
      href={`/show/${id}`}
      className="search_item flex gap-[20px] bg-[#1F2122] py-2 pl-3 items-center text-white w-[400px]"
    >
      <div style={{ position: "relative", height: 60, width: 80 }}>
        <Image
          loading="lazy"
          src={`https:${imgUrl}`}
          fill
          style={{ objectFit: "fill" }}
          alt="cart-product"
        />
      </div>
      <h2>{name}</h2>
    </Link>
  );
};

export default SearchItem;
