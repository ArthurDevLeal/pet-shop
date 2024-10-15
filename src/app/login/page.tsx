"use client";
import { Chrome, Facebook } from "lucide-react";
import CustomLogin from "../components/ui/custom-login";
import DivisionBar from "../components/ui/division-bar";
import { Input } from "../components/ui/Input-form";
import Tittle from "./components/tittle";
import Description from "./components/description";
import AccountButton from "./components/account-button";
import { Button } from "../components/ui/button-started";
import { useEffect, useState } from "react";
import { validEmail, validPassword } from "@/util/verify-inputs";
import Form from "./components/form";
import PasswordVerify from "../components/ui/password-verify";
import { useUserStore } from "@/store/user-store";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const { setUser } = useUserStore();
  useEffect(() => {
    if (validEmail.test(email) && validPassword.test(password)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email, password]);
  const handleClickBtn = () => {
    setUser({ email, password });
  };
  return (
    <main className="h-full flex flex-col gap-8 items-center poppins ">
      <div className="flex flex-col justify-center items-center">
        <Tittle text1="Hello," text2="Welcome Back!" />
        <Description text="Water is life. Water is a basic human need. In various lines of life, humans need water." />
        <Form setEmail={setEmail} setPassword={setPassword} />
        <PasswordVerify password={password} />
        <DivisionBar className="py-8" />
        <div className="flex gap-3 justify-center">
          <CustomLogin text="Google" Logo={Chrome} className="" />
          <CustomLogin text="facebook" Logo={Facebook} className="" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <AccountButton text="Don’t have an account?" href="/register" hrefText="Create Account" />
        <Button text="Get Started" href={"/"} isValid={isValid} onClick={handleClickBtn} />
      </div>
    </main>
  );
}
