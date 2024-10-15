import { Bell, Search } from "lucide-react";
import { HeaderIndex } from "./header-index";

export default function Header() {
  return (
    <HeaderIndex.Root>
      <HeaderIndex.Location />
      <div className="flex gap-3">
        <HeaderIndex.Button Element={Search} />
        <HeaderIndex.Button Element={Bell} />
      </div>
    </HeaderIndex.Root>
  );
}
