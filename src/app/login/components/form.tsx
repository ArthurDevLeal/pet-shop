"use client";
import { Input } from "@/app/components/ui/Input-form";
import { Dispatch, SetStateAction } from "react";
interface FormProps {
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
}

export default function Form({ setPassword, setEmail }: FormProps) {
  return (
    <form className="flex flex-col">
      <Input type="text" text="Email" className="mb-4" onChange={setEmail} />
      <Input type="password" text="Password" className="mb-4" onChange={setPassword} />
    </form>
  );
}
