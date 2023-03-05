import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { SaleImg } from "../sale-icon/sale-icon.styles";

import { ButtonsContainer, BuyItButton, Card, CardMainImg } from "./product-card.style.jsx";

const ProductCard = ({ product }) => {
  
  const { addItemToCart} = useContext(CartContext);

  const { id, name, url, price, sale } = product;
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  // If the product on sale - each 3rd product has a half price
  const discount = () => {
    return setTotal(total - price / 2);
  };

  const totalPriceMinus = () => {
    if (count > 0) {
      if (sale && count % 3 === 0) {
        discount();
      } else {
        setTotal(total - price);
      }
      setCount(count - 1);
    }
  }

  const totalPricePlus = () => {
    if (sale && (count + 1) % 3 === 0) {
      setTotal(total + price / 2);
    } else {
      setTotal(total + price);
    }
    setCount(count + 1);
  }

  useEffect(() => {
    setTotal(total);
    setCount(count);
  });

  const addProductToCart = () => addItemToCart(product, count, total);

  return (
    <Card key={id}>
      {
        sale ? (
          <SaleImg 
            title="Every 3rd kilo = half price"
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
