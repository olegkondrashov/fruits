import { useContext } from 'react';
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartItems} = useContext(CartContext);

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    }

    const quantityFunc = () => {
        if(cartItems.length > 0) {
            const newQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0)
            return newQuantity
        } else {
            return 0
        }
    }

    const quantity = quantityFunc()

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon/>
            <ItemCount>{quantity}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;