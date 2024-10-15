import Header from "./components/header/header";
import Category from "./components/category/category";
import BestSeller from "./components/best-seller/best-seller";

export default function Page() {
  return (
    <main className="h-full w-[375px] p-6 flex flex-col items-center poppins">
      <Header />
      <div className="w-[327px] h-[139px] bg-[#fd9340] rounded-3xl"></div>
      <Category />
      <BestSeller/>
      
    </main>
  );
}
