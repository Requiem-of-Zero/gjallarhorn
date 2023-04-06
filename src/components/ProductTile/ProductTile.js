import Image from "next/image";

const ProductTile = ({ name, description, imgUrl, price, quantity }) => {
  const handleQuantity = (quantity) => {
    if (quantity > 20) {
      return "In stock";
    } else if (quantity < 10) {
      return "< 10 left";
    } else {
      return "Sold out!";
    }
  };
  return (
    <li>
      <Image src={imgUrl} width={1920} height={1080} alt={description} />
      <h3 className="text-light-grey">{description}</h3>
      <h2 className="text-white">{name}</h2>
      <div className="flex justify-between">
        <p className="text-light-grey">{"$" + price}</p>
        <p
          className={`px-2 ${
            quantity > 20 ? "bg-[green] text-white" : "text-grey bg-[#F7C00B]"
          }`}
        >
          {handleQuantity(quantity)}
        </p>
      </div>
    </li>
  );
};

export default ProductTile;
