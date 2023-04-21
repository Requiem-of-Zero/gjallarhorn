import { useRouter } from "next/router";

const EmptyResults = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div
      id="empty_background"
      className="w-screen min-h-screen flex relative items-center justify-center"
    >
      <p className="text-6xl text-blue shadow-lg">
        {router.pathname === "/cart"
          ? "There are no items in your cart..."
          : "There were no matches"}
      </p>
    </div>
  );
};

export default EmptyResults;
