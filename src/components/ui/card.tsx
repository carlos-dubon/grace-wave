import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card = (props: CardProps) => {
  return (
    <div className="flex flex-col bg-background/40 gap-1 rounded-xl border border-border p-5 backdrop-blur-sm">
      {props.children}
    </div>
  );
};
