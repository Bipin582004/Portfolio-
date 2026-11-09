import { lazy, Suspense, useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { site } from "../data/site";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";
import VideoCarousel from "./VideoCarousel";
import Reveal from "./Reveal";

// The player is only downloaded when someone opens a video.
const ProjectModal = lazy(() => import("./ProjectModal"));

export default function FeaturedWork() {
  const { work } = site;
  const [open, setOpen] = useState<Project | null>(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section id="work" aria-labelledby="work-title" className="section-y overflow-hidden bg-ink">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="label text-vermilion">{work.eyebrow}</p>
          <h2 id="work-title" className="display-xl mt-5">
            {work.headline}
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-paper/65">{work.intro}</p>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-14 sm:mt-16">
        <VideoCarousel projects={projects} onOpen={setOpen} />
      </Reveal>

      <AnimatePresence>
        {open && (
          <Suspense fallback={null}>
            <ProjectModal key={String(open.id)} project={open} onClose={close} />
          </Suspense>
        )}
      </AnimatePresence>
    </section>
  );
}
