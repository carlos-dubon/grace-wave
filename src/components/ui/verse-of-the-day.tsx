import { LuBook } from "react-icons/lu";

export const VerseOfTheDay = () => {
  return (
    <div className="border-accent/20 border bg-accent/5 p-8 backdrop-blur-sm rounded-2xl flex flex-col gap-6 h-fit">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
          <LuBook className="h-5 w-5 text-accent" aria-hidden="true" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">
          Verse of the Day
        </span>
      </div>
      <blockquote className="text-xl font-medium italic leading-relaxed text-foreground">
        {'"For where two or three gather in my name, there am I with them."'}
      </blockquote>
      <cite className="text-sm font-semibold not-italic text-accent">
        Matthew 18:20
      </cite>
    </div>
  );
};
