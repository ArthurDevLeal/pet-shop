"use client";
import { Chrome, Facebook } from "lucide-react";
import CustomLogin from "../components/ui/custom-login";
import DivisionBar from "../components/ui/division-bar";
import { Input } from "../components/ui/Input";
import Tittle from "./components/tittle";
import Description from "./components/description";
import AccountButton from "./components/account-button";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    if (email.trim() !== "" && password.trim() !== "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email, password]);

  return (
    <main className="h-full flex flex-col gap-8 justify-center items-center poppins ">
      <div className="flex flex-col justify-center items-center">
        <Tittle text1="Hello," text2="Welcome Back!" />
        <Description text="Water is life. Water is a basic human need. In various lines of life, humans need water." />
        <Input type="text" text="Email" className="mb-4" onChange={setEmail} />
        <Input type="password" text="Password" onChange={setPassword} />

        <DivisionBar className="py-8" />
        <div className="flex gap-3 justify-center">
          <CustomLogin text="Google" Logo={Chrome} className="" />
          <CustomLogin text="facebook" Logo={Facebook} className="" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <AccountButton text="Don’t have an account?" href="/register" hrefText="Create Account" />
        <Button text="Get Started" href={"/"} isValid={isValid} />
      </div>
    </main>
  );
}
