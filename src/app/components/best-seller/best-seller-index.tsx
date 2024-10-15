import { BestSellerProduct } from "./best-seller-product";
import { BestSellerProductButton } from "./best-seller-product-button";
import { BestSellerProductImage } from "./best-seller-product-image";
import { BestSellerProductList } from "./best-seller-product-list";
import { BestSellerProductName } from "./best-seller-product-name";
import { BestSellerProductPrice } from "./best-seller-product-price";
import { BestSellerRoot } from "./best-seller-root";
import { BestSellerTittle } from "./best-seller-tittle";

export const BestSelerIndex = {
  Root: BestSellerRoot,
  Tittle: BestSellerTittle,
  ProductList: BestSellerProductList,
  Product: {
    Product: BestSellerProduct,
    Image: BestSellerProductImage,
    Name: BestSellerProductName,
    Price: BestSellerProductPrice,
    Button: BestSellerProductButton,
  },
};
