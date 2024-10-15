import { ProductType } from "@/types/product-type";
import { BestSelerIndex } from "./best-seller-index";

interface ProductListProps {
  list: ProductType[];
}

export function BestSellerProductList({ list }: ProductListProps) {
  return (
    <>
      {list.map((item) => (
        <BestSelerIndex.Product.Product key={item.id}>
          <BestSelerIndex.Product.Image />
          <div className="self-start w-full">
            <BestSelerIndex.Product.Name name={item.name} />
            <div className="flex justify-between">
              <BestSelerIndex.Product.Price price={item.price} />
              <BestSelerIndex.Product.Button />
            </div>
          </div>
        </BestSelerIndex.Product.Product>
      ))}
    </>
  );
}

