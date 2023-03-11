import { CartContainer, CartImg } from "./cart-item.styles";


const CartItem = ({ cartItem }) => {
    const { name, url, quantity, total } = cartItem;


    return (
      <CartContainer>
        <CartImg src={url} alt={`${name}`} />
        <span>{name}</span>
        <span>x{quantity} kg</span>
        <span>=  ${total}</span>
      </CartContainer>
    );
  };
  
  export default CartItem;