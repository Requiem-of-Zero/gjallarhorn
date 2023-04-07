import Image from "next/image";

const EmptyResults = () => {
  return (
    <div className="w-screen px-[11.3rem]">
      <Image
        src="https://staticg.sportskeeda.com/editor/2022/07/31987-16590245387151-1920.jpg"
        width={1920}
        height={1080}
      />
    </div>
  );
};

export default EmptyResults;
