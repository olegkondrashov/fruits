import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../contexts/product.context";
import { CardContainer } from "../../routes/shop/shop.styles";


const TopProducts = () => {

    const {products} = useContext(ProductsContext)
    const threeItems = products.slice(0, 3);

    return (
        <CardContainer>
            {threeItems.map(product => (
                <ProductCard key={product.id} product={product}/>
                )
            )}
        </CardContainer>
    )
}

export default TopProducts;