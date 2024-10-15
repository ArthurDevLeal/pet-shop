import { ChevronDown } from "lucide-react";

export function HeaderLocation() {
  return (
    <div>
      <p className="flex items-center gap-2 text-[#B3B1B0] text-[12px] font-semibold leading-[18px]">
        Location <ChevronDown size={10} />
      </p>
      <h2 className="">Jebres, Surakarta</h2>
    </div>
  );
}
