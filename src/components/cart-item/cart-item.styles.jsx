import styled from "styled-components";


export const CartContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 4px;
    margin: .5em;
    align-items: center;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
    & span, img {
        display: flex;
        width: 25%;
        
    }

`
export const CartImg = styled.img`
    object-fit: contain;
    height: 30px;
    padding: 5px;
`