import { ProductType } from "@/types/product-type";
import { BestSelerIndex } from "./best-seller-index";

export default function BestSeller() {
  const bestSellers: ProductType[] = [
    { id: 1, name: "RC Kitten", price: "20,99" },
    { id: 2, name: "RC Persian", price: "22,99" },
  ];
  return (
    <BestSelerIndex.Root>
      <BestSelerIndex.Tittle />
      <div className="flex mt-[20px] gap-3 justify-center">
        <BestSelerIndex.ProductList list={bestSellers} />
      </div>
    </BestSelerIndex.Root>
  );
}
