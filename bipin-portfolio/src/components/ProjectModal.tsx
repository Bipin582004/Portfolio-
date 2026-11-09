import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "../data/projects";
import { extractVimeoId, extractYouTubeId, isPlaceholderVideo } from "../lib/media";

function Player({ project }: { project: Project }) {
  if (isPlaceholderVideo(project)) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-charcoal p-8 text-center">
        <span className="label rounded-full bg-vermilion px-3 py-1 text-white">Placeholder</span>
        <p className="max-w-md font-display text-lg text-paper">This card is still a template.</p>
        <p className="max-w-md text-sm leading-relaxed text-paper/65">
          Add your real video in <code className="font-mono text-paper">src/data/projects.ts</code> — set
          <code className="mx-1 font-mono text-paper">videoUrl</code> to your YouTube / Vimeo link or MP4 path.
        </p>
      </div>
    );
  }

  if (project.videoType === "youtube") {
    const id = extractYouTubeId(project.videoUrl);
    return (
      <iframe
        title={project.title}
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        className="h-full w-full border-0"
      />
    );
  }

  if (project.videoType === "vimeo") {
    const id = extractVimeoId(project.videoUrl);
    return (
      <iframe
        title={project.title}
        src={`https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0`}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="h-full w-full border-0"
      />
    );
  }

  return (
    <video
      src={project.videoUrl}
      poster={project.thumbnail}
      controls
      autoPlay
      playsInline
      preload="metadata"
      className="h-full w-full bg-black object-contain"
    />
  );
}

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const portrait = project.orientation === "portrait";

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // keep keyboard focus inside the dialog
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], iframe, video, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full ${portrait ? "max-w-[min(92vw,380px)]" : "max-w-5xl"}`}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-paper/10 text-paper transition-colors hover:bg-vermilion"
        >
          <X size={20} />
        </button>

        <div
          className="overflow-hidden rounded-2xl bg-black shadow-[0_40px_120px_-20px_rgba(240,68,39,0.45)] ring-1 ring-white/10"
          style={{ aspectRatio: portrait ? "9 / 16" : "16 / 9", maxHeight: portrait ? "74vh" : undefined }}
        >
          <Player project={project} />
        </div>

        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className="font-display text-lg font-semibold tracking-tight text-paper sm:text-xl">{project.title}</h3>
          <p className="label text-ash">
            {project.category} · {project.platform}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
