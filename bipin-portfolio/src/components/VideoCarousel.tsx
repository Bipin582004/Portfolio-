import { useCallback, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import type { Project } from "../data/projects";
import { resolveThumbnail } from "../lib/media";
import { useWindowWidth } from "../hooks/useWindowWidth";

interface Props {
  projects: Project[];
  onOpen: (p: Project) => void;
}

export default function VideoCarousel({ projects, onOpen }: Props) {
  const width = useWindowWidth();
  const reduce = useReducedMotion();
  const n = projects.length;

  const isMobile = width < 768;
  const cardW = isMobile ? Math.min(Math.round(width * 0.64), 280) : width < 1024 ? 260 : 300;
  const cardH = Math.round(cardW * 1.42);
  const gap = cardW * (isMobile ? 0.74 : 0.88);

  const [active, setActive] = useState(() => Math.max(0, projects.findIndex((p) => p.featured)));
  const dragged = useRef(false);

  const go = useCallback((i: number) => setActive(Math.min(n - 1, Math.max(0, i))), [n]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60 || info.velocity.x < -450) go(active + 1);
    else if (info.offset.x > 60 || info.velocity.x > 450) go(active - 1);
    window.setTimeout(() => (dragged.current = false), 60);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(active - 1);
    }
  };

  const handleCard = (i: number) => {
    if (dragged.current) return;
    if (i === active) onOpen(projects[i]);
    else go(i);
  };

  if (!n) return null;
  const current = projects[active];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured video projects"
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="outline-offset-8"
    >
      {/* STAGE */}
      <div className="relative [mask-image:linear-gradient(to_right,transparent,black_9%,black_91%,transparent)]">
        {/* warm glow behind the focused card */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[90%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(240,68,39,0.30),rgba(217,75,27,0.08)_45%,transparent_70%)]"
        />

        <div style={{ perspective: 1500, height: cardH * 1.1 + 70 }} className="relative">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            dragSnapToOrigin
            onDragStart={() => (dragged.current = true)}
            onDragEnd={onDragEnd}
            style={{ transformStyle: "preserve-3d" }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            {projects.map((p, i) => {
              const offset = i - active;
              const abs = Math.abs(offset);
              const isActive = offset === 0;
              const hidden = abs > 2;

              return (
                <motion.div
                  key={p.id}
                  role="button"
                  tabIndex={isActive ? 0 : -1}
                  aria-label={isActive ? `Play video: ${p.title}` : `Show: ${p.title}`}
                  aria-hidden={hidden || undefined}
                  onClick={() => handleCard(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleCard(i);
                    }
                  }}
                  animate={{
                    x: offset * gap,
                    scale: isActive ? 1.1 : abs === 1 ? 0.88 : 0.74,
                    rotateY: Math.max(-34, Math.min(34, -offset * 17)),
                    opacity: hidden ? 0 : isActive ? 1 : abs === 1 ? 0.55 : 0.25,
                  }}
                  transition={
                    reduce ? { duration: 0 } : { type: "spring", stiffness: 160, damping: 22, mass: 0.9 }
                  }
                  style={{
                    width: cardW,
                    height: cardH,
                    marginLeft: -cardW / 2,
                    marginTop: -cardH / 2,
                    zIndex: 10 - abs,
                    pointerEvents: hidden ? "none" : "auto",
                  }}
                  className={`group absolute left-1/2 top-1/2 overflow-hidden rounded-[22px] bg-graphite ring-1 ring-white/10 ${
                    isActive ? "shadow-[0_40px_90px_-24px_rgba(240,68,39,0.55)]" : ""
                  }`}
                >
                  <img
                    src={resolveThumbnail(p)}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/35" />

                  {/* top row */}
                  <span className="absolute inset-x-4 top-4 flex items-start justify-between gap-2">
                    <span className="flex flex-wrap gap-1.5">
                      <span className="label rounded-full bg-black/55 px-2.5 py-1 !text-[9.5px] text-paper backdrop-blur-sm">
                        {p.platform}
                      </span>
                      {p.placeholder && (
                        <span className="label rounded-full bg-vermilion px-2.5 py-1 !text-[9.5px] text-white">
                          Placeholder
                        </span>
                      )}
                    </span>
                    {p.duration && <span className="label !text-[10px] text-paper/90">{p.duration}</span>}
                  </span>

                  {/* play */}
                  <span
                    className={`absolute left-1/2 top-[44%] flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper text-ink shadow-xl transition-all duration-500 ${
                      isActive ? "scale-100 opacity-100 group-hover:scale-110" : "scale-75 opacity-70"
                    }`}
                    aria-hidden="true"
                  >
                    <Play size={20} fill="currentColor" className="ml-0.5" />
                  </span>

                  {/* info */}
                  <span className="absolute inset-x-4 bottom-4 block text-left">
                    <span className="label block !text-[10px] text-vermilion">{p.category}</span>
                    <span className="mt-1.5 line-clamp-2 block font-display text-[1.12rem] font-semibold leading-[1.15] tracking-tight text-paper">
                      {p.title}
                    </span>
                    <span className="mt-2 line-clamp-2 block text-[11.5px] leading-snug text-paper/70">
                      {p.description}
                    </span>
                    {p.metrics && p.metrics.length > 0 && (
                      <span className="mt-2.5 flex flex-wrap gap-1.5">
                        {p.metrics.map((m) => (
                          <span key={m.label} className="label rounded-full border border-paper/25 px-2 py-0.5 !text-[9px] text-paper/85">
                            {m.value} {m.label}
                          </span>
                        ))}
                      </span>
                    )}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="mt-6 flex items-center justify-center gap-5 sm:gap-8">
        <button
          type="button"
          onClick={() => go(active - 1)}
          disabled={active === 0}
          aria-label="Previous video"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-paper/25 text-paper transition-colors hover:border-vermilion hover:bg-vermilion disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Choose video">
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to video ${i + 1}: ${p.title}`}
              onClick={() => go(i)}
              className="flex h-6 items-center"
            >
              <span
                className={`block h-[3px] rounded-full transition-all duration-500 ${
                  i === active ? "w-8 bg-vermilion" : "w-3 bg-paper/30 hover:bg-paper/60"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(active + 1)}
          disabled={active === n - 1}
          aria-label="Next video"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-paper/25 text-paper transition-colors hover:border-vermilion hover:bg-vermilion disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <p className="label mt-5 text-center text-ash" aria-live="polite">
        <span className="text-paper">{String(active + 1).padStart(2, "0")}</span> / {String(n).padStart(2, "0")}
        <span className="mx-3 text-paper/25">—</span>
        <span className="normal-case tracking-normal">{current.title}</span>
      </p>
    </div>
  );
}
