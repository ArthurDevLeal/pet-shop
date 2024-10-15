import { ElementType } from "react";

export function HeaderButtonNav({ Element }: { Element: ElementType }) {
  return (
    <button className="btn-header">
      <Element />
    </button>
  );
}
