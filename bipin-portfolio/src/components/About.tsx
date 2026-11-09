import { site } from "../data/site";
import Reveal from "./Reveal";

export default function About() {
  const { about } = site;
  return (
    <section id="about" className="section-y">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="label text-vermilion">{about.eyebrow}</p>
              <h2 className="display-xl mt-5 max-w-[11ch]">{about.headline}</h2>
              <p className="label mt-8 text-ash">{about.languages}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.1}>
              <p className="font-display text-xl font-medium leading-snug tracking-tight text-paper sm:text-2xl">
                {about.paragraphs[0]}
              </p>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-paper/70">
                {about.paragraphs.slice(1).map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className="mt-8 border-l-2 border-vermilion pl-5 text-[15px] leading-relaxed text-paper/90">
                {about.belief}
              </p>
            </Reveal>
          </div>
        </div>

        <ol className="mt-20 grid gap-0 border-t border-white/10 md:grid-cols-3">
          {about.pillars.map((p, i) => (
            <li key={p.title} className="border-b border-white/10 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
              <Reveal delay={i * 0.08}>
                <span className="label text-vermilion">0{i + 1}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-paper/65">{p.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
