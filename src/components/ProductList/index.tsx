import { useEffect, useState } from "react";
import { getProducts } from "../../utils/api/api";
import { ProductItem } from "../ProductItem";
import { StyledProductList } from "./style";
import { Product } from "../../types/product";
type Props = {};

export default function ProductList({}: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function getProduct() {
      const data = await getProducts();
      setProducts(data);
    }
    getProduct();
  }, []);
  return (
    <StyledProductList>
      {products.length > 0 &&
        products.map((product) => (
          <ProductItem
            productId={product.id as string}
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
    </StyledProductList>
  );
}
