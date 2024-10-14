import { ComponentType } from "react";
import { twMerge } from "tailwind-merge";

interface CustomLoginProps {
  text: string;
  Logo: ComponentType;
  className?: string;
}
export default function CustomLogin({ text, Logo, className }: CustomLoginProps) {
  return (
    <button
      className={twMerge(
        "bg-white flex justify-center items-center gap-4 text-[#337EFE] font-bold w-[157px] h-[60px] rounded-2xl border border-[#E5E4E3] hover:bg-gray-100",
        className
      )}
    >
      <Logo />
      {text}
    </button>
  );
}
