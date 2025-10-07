import { useMemo, useState } from "react";
import {
  Bot,
  MessageCircleQuestion,
  PencilRuler,
  Sparkles,
  User,
  Wand2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const assistantModes = [
  {
    id: "qa",
    label: "Q&A Co-pilot",
    description: "Ask clarifying questions and receive contextual answers",
    icon: MessageCircleQuestion,
  },
  {
    id: "quiz",
    label: "Quiz & Exam",
    description: "Generate tests with answer keys in one click",
    icon: PencilRuler,
  },
  {
    id: "analysis",
    label: "Deep Analysis",
    description: "Break down tone, keywords, sentiment, and stance",
    icon: Wand2,
  },
] as const;

type AssistantModeId = (typeof assistantModes)[number]["id"];

const conversation: Record<AssistantModeId, Array<{ role: "user" | "assistant"; content: string; timestamp: string }>> = {
  qa: [
    {
      role: "user",
      content: "Summarize the competitive advantages from this product brief.",
      timestamp: "2 mins ago",
    },
    {
      role: "assistant",
      content:
        "The brief emphasizes multilingual support, adaptive tone presets, and live collaboration. Highlight these differentiators in the exec summary.",
      timestamp: "1 min ago",
    },
    {
      role: "user",
      content: "Create a follow-up email with a confident but friendly tone.",
      timestamp: "1 min ago",
    },
  ],
  quiz: [
    {
      role: "user",
      content: "Generate a 5-question quiz about cellular respiration.",
      timestamp: "3 mins ago",
    },
    {
      role: "assistant",
      content:
        "Created multiple-choice and open-ended questions with answer keys. Ready to export to Slides or Notion.",
      timestamp: "2 mins ago",
    },
  ],
  analysis: [
    {
      role: "user",
      content: "Analyze sentiment in these campaign tweets and flag risks.",
      timestamp: "4 mins ago",
    },
    {
      role: "assistant",
      content:
        "Overall sentiment is optimistic. Post #3 expresses hesitation around pricing—recommend a follow-up CTA with value reinforcement.",
      timestamp: "3 mins ago",
    },
    {
      role: "assistant",
      content: "Detected 12 unique keywords · 3 potential risk themes · 2 quick wins.",
      timestamp: "3 mins ago",
    },
  ],
};

export const AssistantSection = () => {
  const [activeMode, setActiveMode] = useState<AssistantModeId>("qa");

  const activeConversation = useMemo(() => conversation[activeMode], [activeMode]);

  return (
    <section id="assistant" className="bg-neutral py-20">
      <div className="container grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
        <div className="space-y-6">
          <div className="flex flex-col gap-3">
            <span className="pill w-max bg-brand-500/10 text-brand-600">
              Dedicated assistant panel
            </span>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Guide the conversation, Lumin handles the depth.
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Switch between Q&A, quiz generation, and analytical breakdowns without
              leaving the workspace. History and context persist across every mode.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {assistantModes.map(({ id, label, description, icon: Icon }) => {
              const isActive = id === activeMode;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveMode(id)}
                  className={`group flex h-full flex-col justify-between rounded-2xl border p-4 text-left shadow-sm transition ${
                    isActive
                      ? "border-brand-500 bg-white/90 shadow-brand"
                      : "border-border/70 bg-background/80 hover:border-brand-400/80 hover:bg-white/70"
                  }`}
                >
                  <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Icon className="h-4 w-4 text-brand-500" />
                    {label}
                  </span>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {description}
                  </p>
                  <span className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                    {isActive ? "Active" : "Switch"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 text-brand-600">
                <Bot className="h-5 w-5" />
              </span>
              Lumin assistant · {assistantModes.find((mode) => mode.id === activeMode)?.label}
            </div>
            <span className="pill bg-highlight/20 text-highlight-foreground">
              Live sync
            </span>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border/70 bg-background/90 shadow-inner">
            <ScrollArea className="h-80">
              <ul className="space-y-4 p-6">
                {activeConversation.map((message, index) => (
                  <li key={`${message.role}-${index}`} className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                      {message.role === "user" ? (
                        <>
                          <User className="h-3.5 w-3.5" /> You
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-3.5 w-3.5" /> Lumin
                        </>
                      )}
                      <span className="text-muted-foreground/80">· {message.timestamp}</span>
                    </div>
                    <p className="rounded-2xl border border-border/70 bg-white/80 p-4 text-sm text-foreground shadow-sm backdrop-blur-xl dark:bg-white/10">
                      {message.content}
                    </p>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </div>

          <div className="mt-6 rounded-2xl border border-border/70 bg-background/90 p-4">
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Suggested prompts
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              {[
                "Draft launch announcement",
                "Segment customer sentiment",
                "Design comprehension quiz",
                "Translate policy to French",
              ].map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  className="rounded-full border border-border/60 bg-background px-4 py-2 text-sm text-muted-foreground transition hover:border-brand-500 hover:text-foreground"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <div className="flex-1 rounded-2xl border border-border/70 bg-background/95 p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Compose response
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Start typing or choose a preset to populate the field.
              </p>
            </div>
            <Button className="rounded-2xl bg-gradient-to-r from-brand-500 via-brand-400 to-highlight text-sm font-semibold text-white shadow-brand">
              Send to assistant
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
