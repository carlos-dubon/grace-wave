import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
}

export const Card = (props: CardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col bg-background/40 rounded-xl border border-border p-5 backdrop-blur-sm",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};
