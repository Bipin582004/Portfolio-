import { motion } from "framer-motion";
import { process } from "../data/services";
import Reveal from "./Reveal";

/** Horizontal timeline on desktop, vertical on mobile. */
export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="section-y bg-charcoal">
      <div className="container-x">
        <Reveal>
          <p className="label text-vermilion">{process.eyebrow}</p>
          <h2 id="process-title" className="display-xl mt-5 max-w-4xl">
            {process.headline}
          </h2>
        </Reveal>

        <div className="relative mt-16 lg:mt-24">
          {/* desktop line (draws in on scroll) */}
          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "0px 0px -120px 0px" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-[7px] hidden h-px bg-gradient-to-r from-vermilion via-paper/25 to-paper/10 lg:block"
          />
          {/* mobile line */}
          <span aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-vermilion via-paper/25 to-paper/10 lg:hidden" />

          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {process.steps.map((s, i) => (
              <li key={s.title} className="relative pl-10 lg:pl-0 lg:pr-4 lg:pt-12">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-2 border-vermilion bg-charcoal lg:top-0"
                />
                <Reveal delay={i * 0.1} y={20}>
                  <span className="label text-vermilion">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-2xl font-semibold uppercase tracking-tight">{s.title}</h3>
                  <p className="mt-2 max-w-[15rem] text-[15px] leading-relaxed text-paper/65">{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
