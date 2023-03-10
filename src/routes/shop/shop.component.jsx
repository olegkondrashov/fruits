import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../contexts/product.context";

import './shop.styles.jsx'
import { CardContainer } from "./shop.styles.jsx";


const Shop = () => {

    const {products} = useContext(ProductsContext)

    return (
        <CardContainer>
            {products.map(product => (
                <ProductCard key={product.id} product={product}/>
                )
            )}
        </CardContainer>
    )
}

export default Shop;