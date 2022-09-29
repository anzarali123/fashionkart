import {
  Image,
  CartItemContainer,
  ItemDetails,
  Name,
  Price,
} from "./cart-item.styles.js";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} X ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
