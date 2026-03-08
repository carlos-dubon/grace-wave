import { cn } from "@/lib/cn";
import { LuHeadphones } from "react-icons/lu";

interface ShowSlot {
  time: string;
  title: string;
  host: string;
  active?: boolean;
}

const SCHEDULE: ShowSlot[] = [
  { time: "6 AM", title: "Morning Devotions", host: "Sister Ruth" },
  { time: "9 AM", title: "Word & Worship", host: "Pastor James" },
  { time: "12 PM", title: "Midday Praise", host: "Brother Michael" },
  { time: "3 PM", title: "Grace Hour", host: "Sister Hannah" },
  {
    time: "6 PM",
    title: "Evening Devotion Hour",
    host: "Pastor David",
    active: true,
  },
  { time: "10 PM", title: "Night Watch Prayer", host: "Brother Samuel" },
];

export const Schedule = () => {
  return (
    <div className="flex flex-col gap-3">
      {SCHEDULE.map((slot) => (
        <div
          key={slot.time}
          className={cn(
            "flex items-center gap-4 rounded-xl border px-5 py-4 transition-all md:gap-6",
            slot.active
              ? "border-accent/40 bg-accent/10 shadow-lg shadow-accent/5"
              : "border-border bg-background/40 hover:border-border/80",
          )}
        >
          <span
            className={cn(
              "w-16 shrink-0 font-mono text-sm font-bold",
              slot.active ? "text-accent" : "text-muted-foreground",
            )}
          >
            {slot.time}
          </span>

          {slot.active && (
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600" />
            </span>
          )}

          <div className="flex flex-1 flex-col gap-0.5 md:flex-row md:items-center md:gap-4">
            <span
              className={cn(
                "font-space-grotesk text-sm font-bold md:text-base",
                slot.active ? "text-foreground" : "text-foreground/80",
              )}
            >
              {slot.title}
            </span>
            <span className="text-xs text-muted-foreground md:text-sm">
              {slot.host}
            </span>
          </div>

          <LuHeadphones
            className={cn(
              "h-5 w-5 shrink-0",
              slot.active ? "text-accent" : "text-muted-foreground/40",
            )}
          />
        </div>
      ))}
    </div>
  );
};
