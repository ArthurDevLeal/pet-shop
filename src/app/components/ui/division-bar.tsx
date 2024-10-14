import { twMerge } from "tailwind-merge";

export default function DivisionBar({ className }: { className?: string }) {
  return (
    <div className={twMerge("flex items-center gap-9", className)}>
      <span className="block w-[112px] h-[1px] bg-[#E3E8F1] "></span>
      <p className="text-[#C6CEDD] text-[12px] opacity-80">or</p>
      <span className="block w-[112px] h-[1px] bg-[#E3E8F1]"></span>
    </div>
  );
}
