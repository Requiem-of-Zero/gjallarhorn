import { UserAuth } from "../../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/reducers/cartSlice";
import { toast } from "react-toastify";

const Button = ({ quantity, id, name, description, imgUrl, price, setLoading }) => {
  const { user } = UserAuth();
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (quantity > handleQuantityInBag(products, id)) {
      setLoading(true);
      dispatch(
        addToCart({
          id: id,
          name: name,
          description: description,
          imgUrl: imgUrl,
          price: price,
          quantity: 1,
        })
      ) &&
        toast.success(`${name} is added to bag.`) &&
        setTimeout(() => setLoading(false), 500);
    } else {
      toast.error(
        `${name} does not have enough inventory at the stock at the moment`
      );
    }
  };

  const handleQuantityInBag = (products, currProductId) => {
    let count = 0;

    for (const product of products) {
      if (product.id === currProductId) count += product.quantity;
    }

    return count;
  };

  const quantityInBag = handleQuantityInBag(products, id);

  return (
    <button
      disabled={quantity <= 0 || !user}
      onClick={handleClick}
      className={`product_add ${
        quantity <= 0 ? "disabled" : "text-white"
      } border text-xs w-[100%] py-2 tracking-wider mt-1 shadow-btnShadow hover:text-light-grey focus:text-light-grey`}
    >
      {`${user ? "ADD TO BAG" : "Sign In to Start Shopping"} ${
        quantityInBag > 0 ? `(${quantityInBag} INSIDE)` : ""
      }`}
    </button>
  );
};

export default Button;
