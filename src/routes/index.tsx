import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github } from "lucide-react";

import app from "@/lib/config/app.config";
import cn from "@/lib/util/cn";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const slices = [
  "identity",
  "preferences",
  "assistants",
  "accounts",
  "social",
  "relationships",
  "calendar",
  "memories",
  "knowledge",
  "finances",
];

/**
 * Landing page
 */
function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          {/* Icon */}
          <div className="mb-8 animate-float">
            <span className="text-8xl" role="img" aria-label="DNA">
              🧬
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-4 animate-fade-in">
            <img
              src="/lifejson.png"
              alt={app.name}
              className="mx-auto w-full max-w-sm"
            />
          </h1>

          {/* Tagline */}
          <p className="mb-6 animate-fade-in-delay-1 font-light text-2xl text-primary md:text-3xl">
            {app.tagline}
          </p>

          {/* Description */}
          <p className="mx-auto mb-12 max-w-xl animate-fade-in-delay-2 text-lg text-muted-foreground">
            {app.description}
          </p>

          {/* Slices */}
          <div className="mb-12 flex animate-fade-in-delay-3 flex-wrap justify-center gap-2">
            {slices.map((slice, i) => (
              <span
                key={slice}
                className={cn(
                  "rounded-full border border-border bg-accent px-4 py-1.5 font-medium text-accent-foreground text-sm transition-colors hover:bg-primary hover:text-primary-foreground",
                  i % 2 === 0 && "animate-pulse-soft",
                )}
                style={{
                  animationDelay: `${i * 0.2}s`,
                }}
              >
                {slice}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex animate-fade-in-delay-4 flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={app.links.schema}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:scale-105 hover:opacity-90"
            >
              <ExternalLink className="h-5 w-5" />
              View Schema
            </a>
            <a
              href={app.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 font-medium text-foreground transition-all hover:scale-105 hover:bg-accent"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-border border-t px-6 py-8">
        <div className="mx-auto max-w-3xl text-center">
          <a
            href={app.organization.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground text-sm transition-colors hover:text-foreground"
          >
            {app.organization.name}
          </a>
        </div>
      </footer>
    </div>
  );
}
