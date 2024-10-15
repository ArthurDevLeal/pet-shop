"use client";
import { Chrome, Facebook } from "lucide-react";
import { Button } from "../components/ui/button-started";
import CustomLogin from "../components/ui/custom-login";
import DivisionBar from "../components/ui/division-bar";
import AccountButton from "../login/components/account-button";
import Description from "./components/description";
import Tittle from "./components/tittle";
import Form from "./components/form";
import { useEffect, useState } from "react";
import PasswordVerify from "../components/ui/password-verify";
import { validEmail, validPassword } from "@/util/verify-inputs";
import { useUserStore } from "@/store/user-store";

export default function Page() {
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
        <Tittle text1="Create New" text2="Account!" />
        <Description text="Water is life. Water is a basic human need. In various lines of life, humans need water." />
        <Form setEmail={setEmail} setPassword={setPassword} />

        <PasswordVerify password={password} />

        <DivisionBar className="py-8" />
        <div className="flex gap-3 justify-center">
          <CustomLogin text="Google" Logo={Chrome} className="" />
          <CustomLogin text="Facebook" Logo={Facebook} className="" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-8">
        <AccountButton text="Have an account?" href="/login" hrefText="Login" />
        <Button text="Get Started" href="/" isValid={isValid} onClick={handleClickBtn} />
      </div>
    </main>
  );
}
