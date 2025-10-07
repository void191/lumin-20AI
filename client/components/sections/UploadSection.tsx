import { useState } from "react";
import {
  CheckCircle2,
  CloudUpload,
  FileText,
  FolderSync,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const UploadSection = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  return (
    <section id="upload" className="container pb-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
        <div className="rounded-3xl border border-white/50 bg-white/80 p-8 shadow-xl backdrop-blur-xl transition dark:border-white/10 dark:bg-white/5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                Upload hub
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Drop in docs, audio transcripts, and structured content. Lumin
                automatically classifies, cleans, and prepares your input for its
                next transformation.
              </p>
            </div>
            <span className="pill bg-highlight/20 text-highlight-foreground">
              Text · PDF · DOCX
            </span>
          </div>

          <div className="mt-8 space-y-8">
            <label
              htmlFor="file-upload"
              onDragOver={handleDragOver}
              onDragEnter={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`group flex cursor-pointer flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed p-8 text-center transition ${
                isDragging
                  ? "border-brand-500 bg-brand-500/5"
                  : "border-border/80 bg-background/70"
              }`}
            >
              <CloudUpload className="h-12 w-12 text-brand-500" />
              <div>
                <p className="text-lg font-semibold text-foreground">
                  Drag & drop to upload
                </p>
                <p className="text-sm text-muted-foreground">
                  or click to browse your device
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-muted-foreground">
                <span className="pill bg-neutral text-neutral-foreground">
                  .txt
                </span>
                <span className="pill bg-neutral text-neutral-foreground">
                  .pdf
                </span>
                <span className="pill bg-neutral text-neutral-foreground">
                  .docx
                </span>
                <span className="pill bg-neutral text-neutral-foreground">
                  .md
                </span>
              </div>
              <Button
                type="button"
                variant="secondary"
                className="mt-2 rounded-full border-brand-500 bg-white text-brand-600 shadow-sm transition hover:-translate-y-0.5 hover:shadow-brand"
              >
                Select a file
              </Button>
            </label>
            <input id="file-upload" type="file" className="hidden" multiple />

            <div className="grid gap-4 sm:grid-cols-2">
              <UploadBenefit
                icon={<ShieldCheck className="h-5 w-5 text-brand-500" />}
                title="Secure ingestion"
                description="AES-256 encrypted, zero-retention processing."
              />
              <UploadBenefit
                icon={<FolderSync className="h-5 w-5 text-highlight" />}
                title="Auto-synced"
                description="Connect cloud drives and shared folders with ease."
              />
              <UploadBenefit
                icon={<FileText className="h-5 w-5 text-brand-500" />}
                title="Smart parsing"
                description="Section detection, citation capture, and metadata hints."
              />
              <UploadBenefit
                icon={<CheckCircle2 className="h-5 w-5 text-highlight" />}
                title="Ready for AI"
                description="Preview cleanup status before sending to any workflow."
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="surface-card">
            <h3 className="text-lg font-semibold text-foreground">
              Instant workflow routing
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Auto-route your upload to summarized reports, translations, exam
              generation, or tone tuning with a single click.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-muted-foreground">
              {[
                "Detects document intent and recommends the best AI core",
                "Suggests ideal output length and export format",
                "Queues advanced analysis for complex research",
                "Stores processed snippets in History for instant reuse",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background/70 p-4 shadow-sm"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card">
            <h3 className="text-lg font-semibold text-foreground">
              Export-ready outputs
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Send results to Notion, Slides, or Builder CMS with curated formatting
              options baked in.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Slides", color: "bg-brand-500/10 text-brand-600" },
                { label: "Docs", color: "bg-highlight/20 text-highlight-foreground" },
                { label: "Canvas", color: "bg-neutral text-neutral-foreground" },
              ].map((destination) => (
                <div
                  key={destination.label}
                  className="flex h-24 flex-col justify-between rounded-2xl border border-border/70 bg-background/80 p-4"
                >
                  <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                    Destination
                  </span>
                  <span className={`pill ${destination.color} w-max`}>{destination.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type UploadBenefitProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const UploadBenefit = ({ icon, title, description }: UploadBenefitProps) => (
  <div className="rounded-2xl border border-border/70 bg-background/75 p-4 shadow-sm">
    <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
      {icon}
      {title}
    </div>
    <p className="mt-2 text-sm text-muted-foreground">{description}</p>
  </div>
);
