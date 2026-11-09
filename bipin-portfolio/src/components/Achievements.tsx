import { achievements } from "../data/achievements";
import Reveal from "./Reveal";

export default function Achievements() {
  if (!achievements.enabled || achievements.items.length === 0) return null;

  return (
    <section id="highlights" aria-labelledby="highlights-title" className="section-y">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="label text-vermilion">{achievements.eyebrow}</p>
            <h2 id="highlights-title" className="display-lg mt-5">
              {achievements.headline}
            </h2>
          </Reveal>
        </div>

        <ul className="lg:col-span-8">
          {achievements.items.map((a) => (
            <li key={a.title} className="border-t border-white/10 last:border-b">
              <Reveal y={18}>
                <article className="grid gap-2 py-7 sm:grid-cols-[11rem_1fr_auto] sm:gap-8">
                  <p className="label pt-1.5 text-ash">{a.type}</p>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">{a.title}</h3>
                    {a.org && <p className="mt-1 text-sm text-paper/55">{a.org}</p>}
                    <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-paper/65">{a.description}</p>
                  </div>
                  {a.date && <p className="label pt-1.5 text-ash">{a.date}</p>}
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
