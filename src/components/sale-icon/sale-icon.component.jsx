import { SaleImgContainer, SaleImg } from "./sale-icon.styles";

const SaleIcon = ({title, src, alt}) => {
    return (
      <SaleImgContainer data={title} href="#">
        <SaleImg
          src={src}
          alt={alt}
          />
      </SaleImgContainer>
    )
}

export default SaleIcon;