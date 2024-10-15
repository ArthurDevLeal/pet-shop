import { useEffect, useState } from "react";

export default function PasswordVerify({ password }: { password: string }) {
  const [hasMinChars, setHasMinChars] = useState(false);
  const [hasLetter, setHasLetter] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);

  useEffect(() => {
    setHasMinChars(password.length >= 6);
    setHasLetter(/[A-Za-z]/.test(password));
    setHasNumber(/[0-9]/.test(password));
  }, [password]);

  return (
    <ul className="list-disc list-inside self-start">
      <li className={`text-[12px] ${hasMinChars ? "text-customPurple" : "text-[#C6CEDD]"}`}>
        Min 6 characters
      </li>
      <li className={`text-[12px] ${hasLetter ? "text-customPurple" : "text-[#C6CEDD]"}`}>Min 1 letter</li>
      <li className={`text-[12px] ${hasNumber ? "text-customPurple" : "text-[#C6CEDD]"}`}>Min 1 number</li>
    </ul>
  );
}
