import {
  ArrowRight,
  Languages,
  MessageSquareText,
  Sparkles,
  Star,
  TextQuote,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

const heroActions = [
  {
    label: "Summarize",
    description: "Distill books, research, or transcripts without losing nuance.",
    accent: "from-brand-500 to-brand-700",
    icon: Sparkles,
  },
  {
    label: "Translate",
    description: "Instantly adapt content to 80+ languages with tone control.",
    accent: "from-highlight to-brand-500",
    icon: Languages,
  },
  {
    label: "Expand",
    description: "Grow bullet points into long-form copy with context awareness.",
    accent: "from-brand-400 to-highlight",
    icon: MessageSquareText,
  },
  {
    label: "Shorten",
    description: "Condense documents into sharp summaries for quick review.",
    accent: "from-brand-500 to-accent",
    icon: TextQuote,
  },
] as const;

export const HeroSection = () => {
  return (
    <section
      id="overview"
      className="relative overflow-hidden pb-20 pt-24 sm:pt-28"
    >
      <div className="absolute inset-0 -z-10 bg-glow-radial" />
      <div className="container grid gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
        <div className="space-y-12">
          <Badge className="pill bg-highlight/20 text-highlight-foreground">
            <Sparkles className="h-3.5 w-3.5" />
            AI text orchestration
          </Badge>
          <div className="max-w-xl space-y-6">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Shape intelligent narratives with
              <span className="text-gradient"> Lumin Studio</span>
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Transform any text input into polished output with precision controls,
              multilingual mastery, and adaptive tone. Crafted for teams who expect
              clarity on demand.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#assistant"
              className="pill bg-gradient-to-r from-brand-500 via-brand-400 to-highlight text-sm font-semibold text-white shadow-brand transition hover:translate-y-0.5"
            >
              Launch the assistant
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">4.9/5</span> rating
              from 12k creators this week
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2" id="capabilities">
            {heroActions.map(({ label, description, accent, icon: Icon }) => (
              <button
                key={label}
                type="button"
                className={`group relative overflow-hidden rounded-3xl border border-white/40 bg-white/80 p-6 text-left shadow-xl backdrop-blur-xl transition hover:shadow-brand dark:border-white/10 dark:bg-white/5`}
              >
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${accent} opacity-0 transition duration-500 group-hover:opacity-100`}
                />
                <div className="flex items-center justify-between gap-4">
                  <span className="text-lg font-semibold text-foreground">
                    {label}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/60 text-brand-600 shadow-inner backdrop-blur-sm transition group-hover:bg-white/90 dark:bg-white/10">
                    <Icon className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                  Tap to configure
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="surface-card relative space-y-6">
          <div className="absolute -top-10 right-10 hidden animate-float rounded-full bg-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground backdrop-blur-lg md:flex dark:bg-white/10">
            Real-time AI insights
          </div>
          <div className="rounded-2xl border border-white/50 bg-white/70 p-6 shadow-lg backdrop-blur-2xl dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-muted-foreground">
                Active workspace
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-600">
                <Star className="h-3.5 w-3.5" /> Priority core
              </span>
            </div>
            <div className="mt-6 space-y-5">
              <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/80 px-4 py-3 shadow-sm">
                <div>
                  <p className="text-sm font-semibold text-foreground">Focus mode</p>
                  <p className="text-xs text-muted-foreground">
                    Structured outline + highlight detection
                  </p>
                </div>
                <span className="pill bg-brand-500/10 text-brand-600">
                  Active
                </span>
              </div>
              <div className="grid gap-3 text-sm text-muted-foreground">
                <div className="flex items-center justify-between rounded-xl border border-border/70 bg-background/80 px-4 py-3">
                  <div>
                    <p className="font-semibold text-foreground">Tone guardrails</p>
                    <p className="text-xs">Balanced · Professional</p>
                  </div>
                  <span className="pill bg-highlight/20 text-highlight-foreground">
                    Adaptive
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-border/70 bg-background/80 px-4 py-3">
                  <div>
                    <p className="font-semibold text-foreground">Output length</p>
                    <p className="text-xs">Medium · 60 sec delivery</p>
                  </div>
                  <span className="pill bg-brand-500/10 text-brand-600">
                    Auto
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-border/70 bg-background/80 px-4 py-3">
                  <div>
                    <p className="font-semibold text-foreground">Quality boost</p>
                    <p className="text-xs">Precision + context layering</p>
                  </div>
                  <span className="pill bg-accent/20 text-accent-foreground">
                    Enabled
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/50 bg-white/70 p-6 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-muted-foreground">
                Weekly automation summary
              </p>
              <span className="text-xs text-muted-foreground">Updated 3m ago</span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <MetricCard label="Documents processed" value="284" trend="↑ 36%" />
              <MetricCard label="Languages covered" value="27" trend="New" />
              <MetricCard label="Quiz templates" value="42" trend="↑ 18%" />
              <MetricCard label="Avg. turnaround" value="34s" trend="↓ 12%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type MetricCardProps = {
  label: string;
  value: string;
  trend: string;
};

const MetricCard = ({ label, value, trend }: MetricCardProps) => (
  <div className="rounded-2xl border border-border/70 bg-background/80 p-4 shadow-sm">
    <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
      {label}
    </p>
    <div className="mt-3 flex items-baseline gap-2">
      <span className="text-2xl font-semibold text-foreground">{value}</span>
      <span className="text-xs font-semibold text-highlight">{trend}</span>
    </div>
  </div>
);
