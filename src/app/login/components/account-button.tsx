import Link from "next/link";

interface AccountButtonProps {
  text: string;
  hrefText: string;
  href: string;
}
export default function AccountButton({ text, hrefText, href }: AccountButtonProps) {
  return (
    <p className="text-[12px] text-[#1A1919]">
      {text}{" "}
      <Link href={href} className="text-customPurple font-bold">
        {hrefText}
      </Link>
    </p>
  );
}
