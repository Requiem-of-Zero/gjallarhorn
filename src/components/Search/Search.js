import React from "react";

const Search = () => {
  return (
    <div id="main-search" className="flex gap-[10px] items-center">
      <div className="relative">
        <input
          type="text"
          className="px-2 w-[400px] h-[40px] bg-[#1F2122] text-white"
          placeholder="Search..."
        />
        <SearchIcon className="absolute right-[5px] top-[8px]" />
        
      </div>
    </div>
  );
};

export default Search;
