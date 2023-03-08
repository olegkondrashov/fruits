import styled from "styled-components";

export const CheckoutContainer = styled.div`
    margin-top: 50px;
`

export const CheckOutItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5em;
    padding: 1em;
    margin: 1em;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    & span, img{
        width: 20%;
    }
`

export const CheckOutImg = styled.img`
    height: 100px;
    object-fit: contain;
`

export const CheckOutTotal = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
    margin-top: 50px;
    & span {
        display: flex;
        width: 20%;
        font-size: 22px;
    }
`
