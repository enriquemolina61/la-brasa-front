import React from "react";
import { StyledProductItem } from "./style";

export function ProductItem({ name, price, description, image }: Props) {
  return (
    <StyledProductItem>
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
};
