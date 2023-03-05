import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../contexts/product.context";

import './shop.styles.css'


const Shop = () => {

    const {products} = useContext(ProductsContext)

    return (
        <div className="card-container ">
            {products.map(product => (
                <ProductCard key={product.id} product={product}/>
                )
            )}
        </div>
    )
}

export default Shop;