import { useState, createContext } from "react";

import PRODUCTS from '../fruits-list.json';

export const ProductsContext = createContext({
    products: []
});

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products};

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}