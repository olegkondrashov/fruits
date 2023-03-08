import { useState, createContext } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {}
})


const addCartItem = (cartItems, productToAdd, count, CartTotal) => {
  const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
  );

  if(existingCartItem) {
      return cartItems.map((cartItem) => 
          cartItem.id === productToAdd.id 
          ? {...cartItem, quantity: count, total: CartTotal} 
          : cartItem
      );
  }
  return [...cartItems, {...productToAdd, quantity: count, total: CartTotal}];
}

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd, count, CartTotal) => {
    setCartItems(addCartItem(cartItems, productToAdd, count, CartTotal));
  }

  const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems}

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}
