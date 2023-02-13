import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledProductItem } from "./style";

export function ProductItem({
  name,
  price,
  description,
  image,
  productId,
}: Props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${productId}`);
  };
  return (
    <StyledProductItem onClick={handleClick}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>R$ {price}</p>
      <img src={image} />
    </StyledProductItem>
  );
}
type Props = {
  name: string;
  price: number;
  description: string;
  image: string;
  productId: string;
};
