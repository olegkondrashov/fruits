import styled from "styled-components";

export const SaleImgContainer = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    width: 100%;
    &[data]:hover:after {
        content: attr(data);
        padding: 10px;
        color: #fff;
        position: absolute;
        left: 0;
        top: -50px;
        white-space: wrap;
        width: 93%;
        z-index: 2;
        border-radius: 5px ;
        background: rgba(0,0,0,0.5);
  }
`
export const SaleImg = styled.img`
    display: block;
    padding-left: 10px;
    height: 40px;
    width: 80px;
`