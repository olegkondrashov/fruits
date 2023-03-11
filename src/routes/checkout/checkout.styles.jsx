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

export const RemoveButton = styled.span`
    position: relative;
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 30px;
    opacity: 0.3;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
    &:after, &:before {
        position: absolute;
        left: 50%;
        top: 0;
        content: ' ';
        height: 30px;
        width: 2px;
        background-color: #333;
        transform: rotate(-45deg);
    }
    &:before {
        transform: rotate(45deg);
`