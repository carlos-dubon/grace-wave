import { useState } from "react";
import { LuRadio, LuMenu, LuX } from "react-icons/lu";
import { OnAir } from "./on-air";
import { SITE } from "@/consts";

interface NavLink {
  label: string;
  href: string;
}

const links: NavLink[] = [
  {
    label: "Live",
    href: "#live",
  },
  {
    label: "Chat",
    href: "#chat",
  },
  {
    label: "Events",
    href: "#events",
  },
  {
    label: "Schedule",
    href: "#schedule",
  },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl will-change-transform">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="/" className="flex items-center gap-2 rounded-xl">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent">
            <LuRadio className="h-5 w-5 text-background" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground font-space-grotesk">
            {SITE.title}
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <OnAir />
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <LuX className="h-6 w-6" />
          ) : (
            <LuMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav
          className="border-t border-border/50 bg-background px-4 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <OnAir />
          </div>
        </nav>
      )}
    </header>
  );
};
