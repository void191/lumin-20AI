import { useState } from "react";
import {
  BookmarkCheck,
  LayoutDashboard,
  LayoutGrid,
  Palette,
  PanelsTopLeft,
  Sparkles,
  Timer,
} from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";

const colorThemes = [
  {
    id: "lavender",
    label: "Lavender Pulse",
    description: "Vibrant gradients with balanced contrast.",
    swatch: "var(--theme-lavender)",
  },
  {
    id: "aurora",
    label: "Aurora Mint",
    description: "Calming teal palette for focus sessions.",
    swatch: "var(--theme-aurora)",
  },
  {
    id: "sunset",
    label: "Sunset Bloom",
    description: "Warm coral tones perfect for storytelling.",
    swatch: "var(--theme-sunset)",
  },
  {
    id: "forest",
    label: "Forest Focus",
    description: "Earthy greens for analytical deep dives.",
    swatch: "var(--theme-forest)",
  },
] as const;

const layoutModes = [
  {
    id: "focus",
    label: "Focus mode",
    description: "Single column with distraction-free canvas.",
    icon: PanelsTopLeft,
  },
  {
    id: "split",
    label: "Split view",
    description: "Dual pane for input-output side by side.",
    icon: LayoutGrid,
  },
  {
    id: "workroom",
    label: "Collab workroom",
    description: "Real-time team annotations and playback.",
    icon: LayoutDashboard,
  },
] as const;

const historyItems = [
  {
    title: "Summarized quarterly roadmap",
    type: "Summarize",
    timestamp: "3 min ago",
  },
  {
    title: "Translated onboarding email to Spanish",
    type: "Translate",
    timestamp: "8 min ago",
  },
  {
    title: "Expanded microcopy for splash page",
    type: "Expand",
    timestamp: "14 min ago",
  },
  {
    title: "Shortened investor memo",
    type: "Shorten",
    timestamp: "20 min ago",
  },
  {
    title: "Generated biology quiz",
    type: "Quiz",
    timestamp: "26 min ago",
  },
  {
    title: "Analyzed sentiment for campaign #45",
    type: "Analysis",
    timestamp: "31 min ago",
  },
  {
    title: "Converted SOP to docx",
    type: "Summarize",
    timestamp: "38 min ago",
  },
  {
    title: "Translated support transcript",
    type: "Translate",
    timestamp: "45 min ago",
  },
  {
    title: "Expanded UX research brief",
    type: "Expand",
    timestamp: "51 min ago",
  },
  {
    title: "Shortened executive recap",
    type: "Shorten",
    timestamp: "1 hr ago",
  },
] as const;

export const ExperienceSection = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>("lavender");
  const [selectedLayout, setSelectedLayout] = useState<string>("split");

  return (
    <section id="personalization" className="container pb-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-6 rounded-3xl border border-white/50 bg-white/80 p-8 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <span className="pill w-max bg-brand-500/10 text-brand-600">
            Personalize the workspace
          </span>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Tune colors, layout, and vibe in seconds.
          </h2>
          <p className="text-sm text-muted-foreground">
            Configure a palette that reflects your brand and structure the layout
            to match your team workflow. Changes preview instantly so you can commit
            with confidence.
          </p>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground">
              Color themes
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {colorThemes.map((theme) => {
                const isActive = selectedTheme === theme.id;
                return (
                  <button
                    type="button"
                    key={theme.id}
                    onClick={() => setSelectedTheme(theme.id)}
                    className={`flex h-full flex-col justify-between rounded-2xl border p-4 text-left shadow-sm transition ${
                      isActive
                        ? "border-brand-500 bg-white/90 shadow-brand"
                        : "border-border/70 bg-background/80 hover:border-brand-400/70 hover:bg-white/70"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                        <Palette className="h-4 w-4 text-brand-500" />
                        {theme.label}
                      </div>
                      <span
                        className="h-10 w-10 rounded-full border border-white/40 shadow-inner"
                        style={{ backgroundColor: `hsl(${theme.swatch})` }}
                      />
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground">
                      {theme.description}
                    </p>
                    <span className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                      {isActive ? "Selected" : "Preview"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground">
              Layout presets
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {layoutModes.map((mode) => {
                const isActive = selectedLayout === mode.id;
                const Icon = mode.icon;
                return (
                  <button
                    type="button"
                    key={mode.id}
                    onClick={() => setSelectedLayout(mode.id)}
                    className={`flex h-full flex-col justify-between rounded-2xl border p-4 text-left shadow-sm transition ${
                      isActive
                        ? "border-brand-500 bg-white/90 shadow-brand"
                        : "border-border/70 bg-background/80 hover:border-brand-400/70 hover:bg-white/70"
                    }`}
                  >
                    <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                      <Icon className="h-4 w-4 text-brand-500" />
                      {mode.label}
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground">
                      {mode.description}
                    </p>
                    <span className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                      {isActive ? "Selected" : "Preview"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-6 rounded-3xl border border-white/50 bg-white/80 p-8 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                History · last 10 interactions
              </h3>
              <p className="text-sm text-muted-foreground">
                Everything you or your teammates touched streams here for rapid
                reuse.
              </p>
            </div>
            <span className="pill bg-brand-500/10 text-brand-600">
              Auto saved
            </span>
          </div>
          <ScrollArea className="h-[420px] rounded-2xl border border-border/70 bg-background/85">
            <ul className="divide-y divide-border/60">
              {historyItems.map((item, index) => (
                <li key={item.title} className="grid gap-2 p-5 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/10 text-xs font-semibold text-brand-600">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-foreground">{item.title}</p>
                        <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground/80">
                          {item.type}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground/80">
                      <Timer className="h-3.5 w-3.5" />
                      {item.timestamp}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollArea>
          <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/90 p-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <BookmarkCheck className="h-4 w-4 text-brand-500" />
              Pin an interaction to keep it at the top of the workspace.
            </span>
            <Sparkles className="hidden h-4 w-4 text-highlight sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
};
