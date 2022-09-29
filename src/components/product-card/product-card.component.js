import Button from "../button/button.component";
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles.js";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };
  return (
    <ProductCartContainer>
      <img src={imageUrl} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        onClick={addProductToCart}
        buttonType={BUTTON_TYPE_CLASSES.inverted}
      >
        Add to cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
