const Header = () => {
  return (
    <div className="sticky top-0 z-10 bg-grey w-screen h-10 flex justify-end flex-col items-center px-4 py-2 lgl:h-[120px] lgl:items-start">
      <h1 className="text-3xl text-blue">NEW TYPE OCEAN</h1>
      <div id="topNav">
        <ul className="flex text-white gap-[20px] tracking-wider">
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
