import { services } from "../data/services";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section-y">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <p className="label text-vermilion">{services.eyebrow}</p>
              <h2 id="services-title" className="display-lg mt-5">
                {services.headline}
              </h2>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-paper/65">{services.note}</p>
            </Reveal>
          </div>
        </div>

        <ol className="lg:col-span-7">
          {services.items.map((s, i) => (
            <li key={s.title} className="border-t border-white/10 last:border-b">
              <Reveal delay={0.04}>
                <article className="group grid grid-cols-[auto_1fr] gap-x-6 py-7 transition-colors duration-500 hover:bg-charcoal sm:gap-x-10 sm:px-4 sm:py-8">
                  <span className="label pt-2 text-ash transition-colors duration-300 group-hover:text-vermilion">
                    0{i + 1}
                  </span>
                  <div className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                    <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">{s.title}</h3>
                    <p className="mt-2 max-w-md text-[15px] leading-relaxed text-paper/65">{s.text}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
