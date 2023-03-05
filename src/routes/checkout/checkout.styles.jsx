import styled from "styled-components";

export const CheckoutContainer = styled.div`
    margin-top: 50px;
`

export const CheckOutItem = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: 0.5em;
    padding: 1em;
    margin: 1em;
    border-bottom: 1px solid rgba(0,0,0,0.2);
`

export const CheckOutImg = styled.img`
    margin: 0 auto;
    height: 100px;
    width: 100px;
`
