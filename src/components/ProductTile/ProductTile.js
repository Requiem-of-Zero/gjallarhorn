const ProductTile = ({name, description, imgUrl, price, quantity}) => {
  return (
    <li>
      <img src={imgUrl} alt={description} />
      <h3>{description}</h3>
      <h2>{name}</h2>
    </li>
  )
}

export default ProductTile