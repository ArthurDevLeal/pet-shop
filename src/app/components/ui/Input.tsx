import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps {
  text: string;
  className?: string;
  type: string;
  value: string;
  onChange: (arg: string) => void;
}

export function Input({ text, className, type, value, onChange }: InputProps) {
  return (
    <input
      type={type}
      placeholder={text}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={twMerge(
        "text-customPurple w-[327px] h-[60px] px-6 py-5 outline-none border border-[#E5E4E3] flex-shrink-0 rounded-2xl leading-[21px] focus:border-customPurple focus:placeholder:text-customPurple focus:text-customPurple ",
        className
      )}
    />
  );
}
