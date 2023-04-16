const Stock = ({ quantityTag, quantityColor }) => {
  return <p className={`px-2 ${quantityColor}`}>{quantityTag}</p>;
};

export default Stock;
