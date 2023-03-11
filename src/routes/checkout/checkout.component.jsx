import { useContext } from 'react';
import EmptyCheckout from '../../components/empty-checkout/empty-checkout.component';
import { CartContext } from '../../contexts/cart.context';
import { CheckoutContainer, CheckOutImg, CheckOutItem, CheckOutTotal, RemoveButton} from './checkout.styles'

const CheckOut = () => {

    const {cartItems, removeItem } = useContext(CartContext);


    const checkoutItems = cartItems.map((item) => {
        const { id, name, url, quantity, total } = item;

        return (
            <CheckOutItem key={id}>
                <CheckOutImg src={url} alt={`${name}`} />
                <span>{name}</span>
                <span>{quantity} kg</span>
                <span> ${total} </span>
                <RemoveButton onClick={() => removeItem(id)}/>
            </CheckOutItem>
        )
        
    })

    const checkOutTotal = (products) => {
        return products.reduce((acc, product) => {
          return acc + product.total;
        }, 0);
    };

    return (
        <CheckoutContainer>
            <CheckOutItem>
                <span>Product</span>
                <span>Name</span>
                <span>Quantity</span>
                <span>Total</span>
                <span>Remove</span>
            </CheckOutItem>
            { cartItems.length ? checkoutItems : <EmptyCheckout/>}
            <CheckOutTotal>
                <span>Total: ${checkOutTotal(cartItems)}</span>
            </CheckOutTotal>
        </CheckoutContainer>
    )
}

export default CheckOut;