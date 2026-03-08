import { LuRadio } from "react-icons/lu";

interface FooterLink {
  href: string;
  label: string;
}

const FOOTER_LINKS: FooterLink[] = [
  { href: "#live", label: "Listen Live" },
  { href: "#chat", label: "Chat" },
  { href: "#events", label: "Events" },
  { href: "#schedule", label: "Schedule" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 mt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <a href="/" className="flex items-center gap-2 w-fit">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <LuRadio className="h-4 w-4 text-background" />
              </div>
              <span className="font-space-grotesk text-lg font-bold text-foreground">
                Grace<span className="text-accent">Wave</span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Broadcasting God's love through worship music, inspiring messages,
              and a community rooted in faith.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-space-grotesk text-sm font-bold uppercase tracking-wider text-foreground">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-space-grotesk text-sm font-bold uppercase tracking-wider text-foreground">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">
                listen@gracewave.fm
              </span>
              <span className="text-sm text-muted-foreground">
                +1 (555) 724-PRAY
              </span>
              <span className="text-sm text-muted-foreground">
                Grace Community Center, Studio A
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Grace Wave Radio. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Broadcasting His Word to the nations.
          </p>
        </div>
      </div>
    </footer>
  );
};
