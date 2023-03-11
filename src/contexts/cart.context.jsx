import { useState, createContext } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {}
})


const addCartItem = (cartItems, productToAdd, count, cartTotal) => {
  const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
  );

  if(existingCartItem) {
      return cartItems.map((cartItem) => 
          cartItem.id === productToAdd.id 
          ? {...cartItem, quantity: count, total: cartTotal} 
          : cartItem
      );
  }
  return [...cartItems, {...productToAdd, quantity: count, total: cartTotal}];
}

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd, count, cartTotal) => {
    setCartItems(addCartItem(cartItems, productToAdd, count, cartTotal));
  }

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, removeItem}

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}
