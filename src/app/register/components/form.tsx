"use client";
import { Input } from "@/app/components/ui/Input";
import { Dispatch, SetStateAction } from "react";
interface FormProps {
  setFullname: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
}

export default function Form({ setFullname, setPassword, setEmail }: FormProps) {
  return (
    <form className="flex flex-col">
      <Input type="text" text="Full Name" className="mb-4" onChange={setFullname} />
      <Input type="text" text="Email" className="mb-4" onChange={setEmail} />
      <Input type="password" text="Password" className="mb-4" onChange={setPassword} />
    </form>
  );
}
