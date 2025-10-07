import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Clock4,
  LayoutPanelTop,
  ListChecks,
  Sparkles,
  Star,
  UserPlus,
} from "lucide-react";
import { Link } from "react-router-dom";

import { ThemeToggle } from "@/components/navigation/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Assistant", href: "#assistant" },
  { label: "Personalize", href: "#personalization" },
];

const historyQuickLinks = [
  "Summarized legal contract",
  "Translated onboarding deck",
  "Expanded UX principles",
  "Generated quiz for biology exam",
  "Shortened executive recap",
  "Analyzed campaign sentiment",
  "Summarized meeting transcript",
  "Translated support tickets",
  "Expanded policy draft",
  "Shortened investor update",
];

export const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="container flex items-center justify-between gap-3 py-4">
        <Link
          to="/"
          className="flex items-center gap-3 rounded-full bg-white/60 px-4 py-2 text-sm font-semibold text-foreground shadow-sm ring-1 ring-border/80 transition hover:shadow-brand dark:bg-white/10"
          onClick={closeMenu}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-highlight text-white shadow-brand">
            <Sparkles className="h-4 w-4" />
          </span>
          Lumin Studio
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <NavDropdown
            label="Account"
            icon={<UserPlus className="h-4 w-4" />}
            items={[
              { label: "Sign up", description: "Create your Lumin profile" },
              { label: "Login", description: "Return to your workspace" },
              {
                label: "Premium upgrade",
                description: "Unlock automation and priority AI cores",
              },
            ]}
          />
          <NavDropdown
            label="Settings"
            icon={<LayoutPanelTop className="h-4 w-4" />}
            items={[
              {
                label: "Color personalization",
                description: "Switch themes to match your vibe",
              },
              {
                label: "Layout presets",
                description: "Choose focus, split, or collaborative",
              },
              {
                label: "Voice & tone",
                description: "Configure output length and tenor",
              },
            ]}
          />
          <NavDropdown
            label="History"
            icon={<Clock4 className="h-4 w-4" />}
            items={historyQuickLinks.map((label, index) => ({
              label,
              description: index < 3 ? "Pinned" : "Recent session",
            }))}
            highlightFooter="View the full history"
          />
          <ThemeToggle />
          <Button className="ml-1 rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-highlight px-5 py-2 text-sm font-semibold text-white shadow-brand transition hover:translate-y-0.5">
            Launch Studio
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/80 text-foreground shadow-sm transition hover:shadow-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <ChevronDown
            className={`h-5 w-5 transition-transform ${menuOpen ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-border/60 bg-background/95 px-6 pb-6 pt-4 shadow-xl lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-foreground/90"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <div className="h-px bg-border/70" />
            <div className="grid gap-3">
              <DropdownList
                title="Account"
                icon={<UserPlus className="h-4 w-4" />}
                entries={[
                  "Sign up",
                  "Login",
                  "Premium upgrade",
                ]}
              />
              <DropdownList
                title="Settings"
                icon={<LayoutPanelTop className="h-4 w-4" />}
                entries={[
                  "Color personalization",
                  "Layout presets",
                  "Voice & tone",
                ]}
              />
              <DropdownList
                title="History"
                icon={<Clock4 className="h-4 w-4" />}
                entries={historyQuickLinks}
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <ThemeToggle />
              <Button className="flex-1 rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-highlight text-sm font-semibold text-white shadow-brand">
                Launch Studio
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

type NavDropdownProps = {
  label: string;
  items: { label: string; description?: string }[];
  icon?: React.ReactNode;
  highlightFooter?: string;
};

const NavDropdown = ({ label, items, icon, highlightFooter }: NavDropdownProps) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full border border-transparent bg-neutral px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:border-border hover:bg-background"
      >
        {icon}
        {label}
        <ChevronDown className="h-4 w-4" />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-72 rounded-2xl border border-border/70 bg-background/98 p-2 shadow-lg backdrop-blur-xl">
      <DropdownMenuLabel className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
        {label}
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      {items.map((item) => (
        <DropdownMenuItem
          key={item.label}
          className="flex flex-col items-start rounded-xl px-3 py-3 text-sm"
        >
          <span className="flex items-center gap-2 text-foreground">
            <Star className="h-3.5 w-3.5 text-brand-500" />
            {item.label}
          </span>
          {item.description ? (
            <span className="mt-1 text-xs text-muted-foreground">
              {item.description}
            </span>
          ) : null}
        </DropdownMenuItem>
      ))}
      {highlightFooter ? (
        <>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center justify-between rounded-lg px-3 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            {highlightFooter}
            <ArrowUpRight className="h-4 w-4" />
          </DropdownMenuItem>
        </>
      ) : null}
    </DropdownMenuContent>
  </DropdownMenu>
);

type DropdownListProps = {
  title: string;
  entries: string[];
  icon?: React.ReactNode;
};

const DropdownList = ({ title, entries, icon }: DropdownListProps) => (
  <div className="rounded-2xl border border-border/70 bg-background/90 p-4 shadow-sm">
    <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
      {icon}
      {title}
    </div>
    <ul className="grid gap-2 text-sm text-muted-foreground">
      {entries.map((entry) => (
        <li key={entry} className="flex items-center gap-2">
          <ListChecks className="h-3.5 w-3.5 text-brand-500" />
          {entry}
        </li>
      ))}
    </ul>
  </div>
);
