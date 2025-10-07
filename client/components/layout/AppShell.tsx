import { Outlet } from "react-router-dom";

import { MainHeader } from "@/components/navigation/MainHeader";

export const AppShell = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <div className="relative flex min-h-screen flex-col">
        <MainHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <footer className="border-t border-border/60 bg-background/80 py-10">
          <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground/80">
                Lumin Studio
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                The AI workspace built for high fidelity text intelligence.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <a
                className="transition hover:text-foreground"
                href="#personalization"
              >
                Personalize experience
              </a>
              <span className="hidden h-3 w-px bg-border/80 md:block" />
              <a className="transition hover:text-foreground" href="#assistant">
                Assistant workspace
              </a>
              <span className="hidden h-3 w-px bg-border/80 md:block" />
              <a className="transition hover:text-foreground" href="#upload">
                Upload center
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
