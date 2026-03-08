import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface CardProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export const Card = (props: CardProps) => {
  return (
    <div
      id={props.id}
      className={cn(
        "flex flex-col bg-background/40 rounded-xl border border-border p-5 backdrop-blur-sm scroll-my-32",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};
