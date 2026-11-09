import { site } from "../data/site";
import Reveal from "./Reveal";

/** Collaboration CATEGORIES (not logos) — a credibility strip without fake claims. */
export default function TrustStrip() {
  const { trust } = site;
  return (
    <section
      aria-label="Who I collaborate with"
      className="relative z-0 -mt-10 rounded-b-[2rem] bg-charcoal pb-14 pt-24 sm:-mt-14 sm:rounded-b-[3.5rem] sm:pb-16 sm:pt-28"
    >
      <div className="container-x">
        <Reveal>
          <p className="label text-ash">{trust.leadIn}</p>
          <h2 className="mt-3 max-w-3xl font-display text-xl font-semibold leading-tight tracking-tight text-paper sm:text-2xl">
            {trust.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-8 lg:flex-nowrap lg:justify-between">
            {trust.categories.map((c) => (
              <li key={c} className="flex items-center gap-3 font-display text-lg font-medium text-paper/90 sm:text-xl">
                <span aria-hidden="true" className="font-mono text-vermilion">
                  +
                </span>
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
