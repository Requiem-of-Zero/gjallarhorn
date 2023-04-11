import Image from "next/image";

const EmptyResults = () => {
  return (
    <div className="max-w-contentContainer min-h-screen flex relative items-center">
      <Image
        src="https://staticg.sportskeeda.com/editor/2022/07/31987-16590245387151-1920.jpg"
        width={1920}
        height={1080}
        alt='gojo'
      />
      <p className="absolute text-6xl top-[300px] left-[100px]">
        There are no items in your cart... 
      </p>
    </div>
  );
};

export default EmptyResults;
