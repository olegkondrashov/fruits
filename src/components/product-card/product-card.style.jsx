import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 250px;
  aspect-ratio: 9/16;
  padding: 2em;
  border:  1px solid;
  border-image-slice: 1;
  border-width: 2px;
  border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
`
  
export const CardMainImg = styled.img`
  height: 50%;
  width: 100%;
  object-fit: contain;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
  gap: 10px;
  height: 30px;
`

export const BuyItButton = styled.button`
  width: 100%;
  height: 50px;
`