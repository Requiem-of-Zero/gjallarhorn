import Image from "next/image";

const EmptyResults = () => {
  return (
    <div id='empty_background' className="w-screen min-h-screen flex relative items-center justify-center">
      <p className="text-6xl text-blue shadow-lg">
        There are no items in your cart... 
      </p>
    </div>
  );
};

export default EmptyResults;
