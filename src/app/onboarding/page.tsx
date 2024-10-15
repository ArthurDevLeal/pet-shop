import { Button } from "../components/ui/button-started";
import { Description } from "./components/description";
import { ImagePlaceholder } from "./components/image-placeholder";
import { Tittle } from "./components/tittle";

export default function onBoarding() {
  return (
    <main className="h-full flex flex-col  items-center p-6 poppins gap-0 sm:gap-16">
      <div className="w-[319px]">
        <Tittle text="Meet your animals needs here" />
        <ImagePlaceholder />
        <Description text="Get interesting promos here, register your account immediately so you can meet your animal needs." />
      </div>
      <Button text="Get Started" href="/register" isValid={true} />
    </main>
  );
}
