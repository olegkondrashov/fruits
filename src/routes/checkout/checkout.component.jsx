import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {CheckoutContainer, CheckOutImg, CheckOutItem} from './checkout.styles'

const CheckOut = () => {

    const {cartItems} = useContext(CartContext);

    const checkoutItems = cartItems.map((item) => {
        const { id, name, url, quantity, total } = item;
        return (
            item ? (
                <CheckOutItem key={id}>
                    <CheckOutImg src={url} alt={`${name}`} />
                    <span>{name}</span>
                    <span>{quantity} kg </span>
                    <span> ${total} </span>
                </CheckOutItem>
            ) :
            'No Items'
        )
    })

    return (
        <CheckoutContainer>
            <CheckOutItem>
                <span>Product</span>
                <span>Name</span>
                <span>Quantity</span>
                <span>Total</span>
            </CheckOutItem>
            { checkoutItems }
        </CheckoutContainer>
    )
}

export default CheckOut;