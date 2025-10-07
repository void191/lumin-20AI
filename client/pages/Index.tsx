import { AssistantSection } from "@/components/sections/AssistantSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { UploadSection } from "@/components/sections/UploadSection";

export default function Index() {
  return (
    <div className="flex flex-col gap-8">
      <HeroSection />
      <UploadSection />
      <AssistantSection />
      <ExperienceSection />
      <section className="container pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/80 p-12 text-center shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-500/15 via-highlight/15 to-transparent" />
          <p className="pill mx-auto w-max bg-brand-500/10 text-brand-600">
            Ready when you are
          </p>
          <h2 className="mt-6 text-3xl font-semibold text-foreground sm:text-4xl">
            Bring every workflow into one intelligent workspace.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
            Invite your team, configure guardrails, and orchestrate AI-powered
            text experiences that stay on brand. Lumin Studio adapts to your
            structure and scales with your ambitions.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
            <a
              href="#upload"
              className="pill bg-gradient-to-r from-brand-500 via-brand-400 to-highlight text-sm font-semibold text-white shadow-brand transition hover:translate-y-0.5"
            >
              Explore file uploads
            </a>
            <a
              href="#assistant"
              className="pill border border-border/70 bg-background text-muted-foreground transition hover:border-brand-400 hover:text-foreground"
            >
              Preview assistant modes
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
