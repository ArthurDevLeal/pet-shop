"use client";
import { Input } from "@/app/components/ui/Input";
import { useUserContext } from "@/hooks/use-user-context";

export default function Form() {
  const { email, fullName, password, setEmail, setFullName, setPassword } = useUserContext();
  return (
    <>
      <Input type="text" text="Full Name" className="mb-4" value={fullName} onChange={setFullName} />
      <Input type="text" text="Email" className="mb-4" value={email} onChange={setEmail} />
      <Input type="password" text="Password" className="mb-4" value={password} onChange={setPassword} />
    </>
  );
}
