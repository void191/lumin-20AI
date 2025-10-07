import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <div className="pill bg-brand-500/10 text-brand-600">Error 404</div>
      <h1 className="mt-6 text-4xl font-semibold text-foreground sm:text-5xl">
        We couldn’t locate that workspace.
      </h1>
      <p className="mt-4 max-w-xl text-sm text-muted-foreground">
        The link{" "}
        <span className="font-medium text-foreground">{location.pathname}</span>{" "}
        may be outdated or private. Jump back to the main studio or explore the
        latest interactions.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
        <Link
          to="/"
          className="pill bg-gradient-to-r from-brand-500 via-brand-400 to-highlight text-sm font-semibold text-white shadow-brand transition hover:translate-y-0.5"
        >
          Return home
        </Link>
        <a
          href="#assistant"
          className="pill border border-border/70 bg-background text-muted-foreground transition hover:border-brand-400 hover:text-foreground"
        >
          Visit assistant
        </a>
      </div>
    </section>
  );
};

export default NotFound;
