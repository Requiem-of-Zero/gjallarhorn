import Image from "next/image";

const EmptyResults = () => {
  return (
    <div className="max-w-contentContainer">
      <Image
        src="https://staticg.sportskeeda.com/editor/2022/07/31987-16590245387151-1920.jpg"
        width={1920}
        height={1080}
        alt='gojo'
      />
    </div>
  );
};

export default EmptyResults;
