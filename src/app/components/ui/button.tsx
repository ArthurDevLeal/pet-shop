"use client";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
  isValid: boolean;
}

export const Button = ({ text, href, isValid }: ButtonProps) => {
  return (
    <Link
      href={isValid ? href : "#"}
      className={`w-[327px] h-[60px] flex justify-center items-center rounded-[30px] text-white font-bold ${
        isValid
          ? "bg-customPurple hover:bg-customPurple/90"
          : "bg-[#E5E4E3] cursor-default pointer-events-none"
      }`}
    >
      {text}
    </Link>
  );
};
