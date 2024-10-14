"use client";
import { Chrome, Facebook } from "lucide-react";
import { Button } from "../components/ui/button";
import CustomLogin from "../components/ui/custom-login";
import DivisionBar from "../components/ui/division-bar";
import AccountButton from "../login/components/account-button";
import Description from "./components/description";
import Tittle from "./components/tittle";
import Form from "./components/form";
import { useEffect, useState } from "react";

export default function Page() {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    if (fullName.trim() !== "" && email.trim() !== "" && password.trim() !== "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [fullName, email, password]);

  
  return (
    <main className="h-full flex flex-col gap-8 justify-center items-center poppins ">
      <div className="flex flex-col justify-center items-center">
        <Tittle text1="Create New" text2="Account!" />
        <Description text="Water is life. Water is a basic human need. In various lines of life, humans need water." />
        <Form setEmail={setEmail} setFullname={setFullname} setPassword={setPassword} />
        <DivisionBar className="py-8" />
        <div className="flex gap-3 justify-center">
          <CustomLogin text="Google" Logo={Chrome} className="" />
          <CustomLogin text="Facebook" Logo={Facebook} className="" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-8">
        <AccountButton text="Have an account?" href="/login" hrefText="Login" />
        <Button text="Get Started" href="#" isValid={isValid}  />
      </div>
    </main>
  );
}
