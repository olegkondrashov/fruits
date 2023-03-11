import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';


const CartDropdown = () => {
    const {cartItems, isCartOpen, setIsCartOpen} = useContext(CartContext);

    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
        setIsCartOpen(!isCartOpen)
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => 
                    <CartItem key={item.id} cartItem={item}/>)
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <button onClick={goToCheckoutHandler}>GO TO CHECKOUT</button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;