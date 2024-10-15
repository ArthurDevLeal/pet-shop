import { ReactNode } from "react";

export function HeaderRoot({ children }: { children: ReactNode }) {
  return <header className="w-full flex justify-between items-center mb-[51px]">{children}</header>;
}
