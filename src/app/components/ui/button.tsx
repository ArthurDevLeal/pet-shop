import { useUserContext } from "@/hooks/use-user-context";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
  isActive?: boolean;
}

export const Button = ({ text, href }: ButtonProps) => {
  const { email, fullName, password } = useUserContext();
  const isActive = () => {
    return false;
  };
  return (
    <Link
      href={isActive() ? href : "#"}
      className={`w-[327px] h-[60px] flex justify-center items-center rounded-[30px] text-white font-bold ${
        isActive()
          ? "bg-customPurple hover:bg-customPurple/90"
          : "bg-[#E5E4E3] cursor-default pointer-events-none"
      }`}
    >
      {text}
    </Link>
  );
};
