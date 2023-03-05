import { SaleImg } from "./sale-icon.styles";

const SaleIcon = ({title, src, alt}) => {
    return (
        <SaleImg
          title={title}
          src={src}
          alt={alt}
        />
    )
}

export default SaleIcon;