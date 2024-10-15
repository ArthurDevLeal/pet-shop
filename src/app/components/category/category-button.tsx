import { ReactNode } from "react";

export function CategoryButton({ children }: { children: ReactNode }) {
  return (
    <button className="flex justify-center items-center px-[20px] py-[14px] shadow-md bg-[#F8F8F8] text-[#B3B1B0] rounded-2xl text-[12px] font-medium transition-all duration-200 hover:bg-customPurple hover:text-white">
      {children}
    </button>
  );
}
