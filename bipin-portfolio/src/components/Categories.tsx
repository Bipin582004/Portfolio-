import { ArrowUpRight } from "lucide-react";
import { categories } from "../data/services";
import Reveal from "./Reveal";

export default function Categories() {
  return (
    <section id="categories" aria-labelledby="cat-title" className="section-y bg-charcoal">
      <div className="container-x">
        <Reveal>
          <p className="label text-vermilion">CONTENT CATEGORIES</p>
          <h2 id="cat-title" className="display-xl mt-5">
            WHAT I CREATE<span className="text-vermilion">.</span>
          </h2>
        </Reveal>

        <ul className="mt-14 grid border-l border-t border-white/10 sm:grid-cols-2">
          {categories.map((c, i) => (
            <li key={c.title} className="border-b border-r border-white/10">
              <Reveal delay={(i % 2) * 0.1} y={20}>
                <article className="group relative flex min-h-[260px] flex-col justify-between overflow-hidden p-7 transition-colors duration-500 hover:bg-ink sm:min-h-[300px] sm:p-10">
                  {/* oversized number, a quiet visual anchor */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-6 -right-2 select-none font-display text-[9rem] font-bold leading-none tracking-tighter text-paper/[0.04] transition-all duration-700 group-hover:-translate-y-2 group-hover:text-vermilion/25 sm:text-[11rem]"
                  >
                    0{i + 1}
                  </span>

                  <div className="flex items-start justify-between">
                    <span className="label text-ash transition-colors duration-300 group-hover:text-vermilion">
                      0{i + 1}
                    </span>
                    <ArrowUpRight
                      size={22}
                      aria-hidden="true"
                      className="text-paper/30 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-vermilion"
                    />
                  </div>

                  <div className="relative">
                    <h3 className="font-display text-[1.7rem] font-semibold uppercase leading-[1.05] tracking-tight sm:text-3xl">
                      {c.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-paper/65">{c.text}</p>
                    <span className="mt-6 block h-px w-10 bg-vermilion transition-all duration-700 group-hover:w-24" />
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
