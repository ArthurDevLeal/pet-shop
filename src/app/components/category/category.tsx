import { ArrowLeftRight } from "lucide-react";
import { CategoryIndex } from "./category-index";

export default function Category() {
  return (
    <CategoryIndex.Root>
      <CategoryIndex.Tittle />
      <div className="flex gap-3 mt-[20px]">
        <CategoryIndex.Button>
          <ArrowLeftRight color="currentColor"/>
        </CategoryIndex.Button>
        <CategoryIndex.Button>Food</CategoryIndex.Button>
        <CategoryIndex.Button>Toys</CategoryIndex.Button>
        <CategoryIndex.Button>Accesories</CategoryIndex.Button>
      </div>
    </CategoryIndex.Root>
  );
}
