import { CartContainer, CartImg } from "./cart-item.styles";


const CartItem = ({ cartItem }) => {
    const { name, url, quantity, total } = cartItem;


    return (
      <CartContainer>
        <CartImg src={url} alt={`${name}`} />
        <div>
          <span>{name} x {quantity} kg </span>
          <span> =  ${total} </span>
        </div>
      </CartContainer>
    );
  };
  
  export default CartItem;