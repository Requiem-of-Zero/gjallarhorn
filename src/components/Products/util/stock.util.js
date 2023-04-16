export const handleQuantity = (quantity) => {
  if (quantity >= 20) {
    return "In stock";
  } else if (quantity <= 0) {
    return "Sold out!";
  } else if (quantity < 10) {
    return "< 10 left";
  } else if (quantity >= 10) {
    return "> 10 left";
  }
};

export const handleIndicator = (quantity) => {
    if (quantity >= 20) {
      return "bg-[green] text-white";
    } else if (quantity <= 0) {
      return "bg-[red] text-white";
    } else if (quantity < 10) {
      return "bg-[#F7C00B] text-grey";
    } else {
      return "bg-[#F7C00B] text-grey";
    }
  };
