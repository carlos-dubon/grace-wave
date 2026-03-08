import { cn } from "@/lib/cn";
import { LuCalendar, LuClock, LuMapPin, LuArrowRight } from "react-icons/lu";

interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  tag: string;
  featured?: boolean;
  url: string;
}

const EVENTS: EventItem[] = [
  {
    id: "1",
    title: "Community Worship Night",
    description:
      "Join us for an evening of praise and worship with live worship bands from churches across the city. All are welcome. Free admission.",
    date: "Mar 8, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "Grace Community Church",
    tag: "Worship",
    featured: true,
    url: "#",
  },
  {
    id: "2",
    title: "Youth Bible Study",
    description:
      "A special weekly gathering for young people ages 13-25. Dive deep into scripture, ask questions, and grow in faith together.",
    date: "Mar 14, 2026",
    time: "7:00 PM - 9:00 PM",
    location: "Grace Wave Studio",
    tag: "Youth",
    url: "#",
  },
  {
    id: "3",
    title: "Prayer & Fasting Retreat",
    description:
      "A weekend of spiritual renewal and reflection. Join believers for guided prayer sessions, worship, and quiet time with God.",
    date: "Mar 22, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Riverside Retreat Center",
    tag: "Retreat",
    url: "#",
  },
  {
    id: "4",
    title: "Worship Music Workshop",
    description:
      "Learn to lead worship and develop your musical gifts. Open to singers, instrumentalists, and aspiring worship leaders.",
    date: "Mar 29, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Community Arts Center",
    tag: "Workshop",
    url: "#",
  },
  {
    id: "5",
    title: "Listener Appreciation Sunday",
    description:
      "A special all-day broadcast celebrating our faithful listeners with testimonies, praise reports, and giveaways. Thank you for being part of Grace Wave.",
    date: "Apr 5, 2026",
    time: "All Day",
    location: "Live on Air",
    tag: "Special",
    url: "#",
  },
];

export const NoticeBoard = () => {
  return (
    <div
      id="events"
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 scroll-my-32"
    >
      {EVENTS.map((event) => (
        <a
          key={event.id}
          href={event.url}
          className={cn(
            "group flex flex-col gap-4 rounded-2xl border p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 backdrop-blur-sm",
            event.featured
              ? "border-red-600/30 bg-red-600/5 md:col-span-2 lg:col-span-1"
              : "border-border bg-background/40",
          )}
        >
          <div className="flex items-start justify-between">
            <span
              className={cn(
                "inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
                event.featured
                  ? "bg-accent/20 text-accent"
                  : "bg-border/30 text-foreground/80",
              )}
            >
              {event.tag}
            </span>
            {event.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-red-600/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-600">
                Featured
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-space-grotesk text-lg font-bold text-foreground group-hover:text-accent transition-colors">
              {event.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {event.description}
            </p>
          </div>

          <div className="mt-auto flex flex-col gap-2 pt-4 border-t border-border/50">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <LuCalendar className="h-4 w-4 text-accent/70" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <LuClock className="h-4 w-4 text-accent/70" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <LuMapPin className="h-4 w-4 text-accent/70" />
              <span>{event.location}</span>
            </div>
          </div>

          <span className="mt-2 flex items-center gap-2 text-sm font-medium text-accent transition-all group-hover:gap-3">
            Learn More
            <LuArrowRight className="h-4 w-4" />
          </span>
        </a>
      ))}
    </div>
  );
};
