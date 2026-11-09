import { motion } from "framer-motion";
import { site } from "../data/site";
import CtaButton from "./CtaButton";
import Magnetic from "./Magnetic";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const { hero } = site;
  const { portrait } = hero;

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="hero-bg grain relative isolate z-10 overflow-hidden rounded-b-[2rem] sm:rounded-b-[3.5rem]"
    >
      {/* PORTRAIT — replace public/images/hero/portrait.webp + portrait.jpg */}
      <motion.div
        initial={{ opacity: 0, scale: 1.07 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease, delay: 0.15 }}
        className="pointer-events-none absolute right-[-22vw] top-0 -z-0 w-[130vw] sm:right-[-10vw] sm:w-[86vw] lg:bottom-0 lg:right-[-3vw] lg:top-auto lg:w-[min(64vw,1000px)]"
      >
        <picture>
          <source srcSet={portrait.webp} type="image/webp" />
          <img
            src={portrait.jpg}
            alt={portrait.alt}
            width={1100}
            height={1100}
            fetchPriority="high"
            decoding="async"
            style={{ objectPosition: portrait.objectPosition }}
            className={`portrait-mask aspect-square w-full object-cover ${portrait.blend ? "portrait-blend" : ""}`}
          />
        </picture>
      </motion.div>

      {/* depth: darkens the lower part so text stays readable and the strip below feels continuous */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-2/5 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      <div className="container-x relative z-10 flex min-h-[100svh] flex-col justify-between pb-8 pt-[78vw] sm:pt-36 lg:pt-40">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.3 }}
              className="label mb-5 text-paper/90"
            >
              {hero.eyebrow}
            </motion.p>

            <h1 className="font-display font-bold leading-[0.93] tracking-[-0.04em] text-paper text-[clamp(2.7rem,7.4vw,6.6rem)]">
              {hero.headlineLines.map((line, i) => (
                <span key={line} className="-mb-[0.06em] block overflow-hidden pb-[0.06em]">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.1, ease, delay: 0.4 + i * 0.12 }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.95 }}
              className="mt-7 max-w-[34rem] text-[15px] leading-relaxed text-paper/85 sm:text-base"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 1.1 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <CtaButton href={hero.primaryCta.href} variant="light">
                  {hero.primaryCta.label}
                </CtaButton>
              </Magnetic>
              <CtaButton href={hero.secondaryCta.href} variant="outline">
                {hero.secondaryCta.label}
              </CtaButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1.25 }}
            className="max-w-[18rem] lg:col-span-3 lg:col-start-10 lg:mb-20"
          >
            <p className="font-display text-xl font-semibold leading-tight tracking-tight text-paper sm:text-2xl">
              {hero.tagline}
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-paper/75">{hero.taglineBody}</p>
          </motion.div>
        </div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-paper/20 pt-5 lg:grid-cols-4"
        >
          {hero.capabilities.map((c, i) => (
            <li key={c}>
              <span className="label block text-paper/60">0{i + 1}</span>
              <span className="mt-1 block text-[13px] font-medium text-paper sm:text-sm">{c}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
