import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { SaleContext } from "../../contexts/sale.context";
import { PRODUCT_FOR_SALE } from "../../products-for-sale";
import SaleIcon from "../sale-icon/sale-icon.component";

import { ButtonsContainer, BuyItButton, Card, CardMainImg } from "./product-card.style.jsx";

const ProductCard = ({ product }) => {
  const { addNewItems } = useContext(SaleContext);
  const { addItemToCart } = useContext(CartContext);

  const { id, name, url, price } = product;
  useEffect(() => addNewItems(product), [product])
  
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [isSale, setIsSale] = useState(false);


  const setSale = (name) => {
    switch(name) {
      case PRODUCT_FOR_SALE.MANGO:
        return setIsSale(!isSale);
      case PRODUCT_FOR_SALE.KIWI:
        return setIsSale(!isSale);
      default: null
    }
}

  
  // If the product on sale - each 3rd product has a half price
  const discount = () => {
    return setTotal(total - price / 2);
  };

  const totalPriceMinus = () => {
    if (count > 0) {
      if (isSale && count % 3 === 0) {
        discount();
      } else {
        setTotal(total - price);
      }
      setCount(count - 1);
    }
  }

  const totalPricePlus = () => {
    if (isSale && (count + 1) % 3 === 0) {
      setTotal(total + price / 2);
    } else {
      setTotal(total + price);
    }
    setCount(count + 1);
  }

  useEffect(() => {
    setTotal(total);
    setCount(count);
    setSale(name);
  }, []);

  const addProductToCart = () => addItemToCart(product, count, total);

  return (
    <Card key={id}>
      {
        isSale ? (
          <SaleIcon 
            title="Every 3rd kilo = half price "
            src="https://svgsilh.com/svg/606687.svg"
            alt="sale"
          />
        ) : null
      }
      <CardMainImg src={url} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <ButtonsContainer>
        <button onClick={totalPriceMinus}>-</button>
        <p>{count} kg</p>
        <button onClick={totalPricePlus}>+</button>
      </ButtonsContainer>
      <h4>Total: ${total}</h4>
      <BuyItButton onClick={count > 0 ? addProductToCart : null}>
        Buy It
      </BuyItButton>
    </Card>
  );
};

export default ProductCard;
