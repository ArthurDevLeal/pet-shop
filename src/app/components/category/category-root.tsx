import { ReactNode } from "react";

export function CategoryRoot({ children }: { children: ReactNode }) {
  return <section className="w-full">{children} </section>;
}
