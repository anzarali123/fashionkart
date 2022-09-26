import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const handleClick = () => {
    console.log(name);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={handleClick} buttonType="inverted">
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
