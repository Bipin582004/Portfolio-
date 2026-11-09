import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "../data/site";
import { socialLinks } from "../data/socialLinks";
import { useActiveSection } from "../hooks/useActiveSection";
import { ArrowCircle } from "./CtaButton";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Work", id: "work" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(links.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock page scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <nav
          aria-label="Primary"
          className={`mx-auto flex max-w-[1320px] items-center justify-between rounded-full py-2.5 pl-5 pr-2.5 transition-all duration-500 ${
            scrolled || open ? "bg-ink/75 ring-1 ring-white/10 backdrop-blur-xl" : "bg-transparent"
          }`}
        >
          <a href="#home" onClick={() => setOpen(false)} className="font-display text-lg font-bold tracking-tight">
            {site.brandMark}
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? "page" : undefined}
                  className={`relative block py-1 text-[13px] font-medium transition-colors duration-300 ${
                    active === l.id ? "text-paper" : "text-paper/70 hover:text-paper"
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className={`absolute -bottom-0.5 left-0 h-[2px] w-full rounded-full ${
                        scrolled ? "bg-vermilion" : "bg-paper"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="group hidden items-center gap-3 rounded-full bg-paper py-1 pl-5 pr-1 font-display text-[11.5px] font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-white md:inline-flex"
            >
              Let&rsquo;s connect
              <ArrowCircle className="!h-8 !w-8" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-paper/10 md:hidden"
            >
              <span
                className={`absolute h-[2px] w-5 bg-paper transition-transform duration-300 ${
                  open ? "rotate-45" : "-translate-y-[4px]"
                }`}
              />
              <span
                className={`absolute h-[2px] w-5 bg-paper transition-transform duration-300 ${
                  open ? "-rotate-45" : "translate-y-[4px]"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-6 pb-10 pt-28 md:hidden"
          >
            <ul className="space-y-1">
              {links.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-baseline gap-4 py-2 font-display text-[2.6rem] font-bold leading-none tracking-tight ${
                      active === l.id ? "text-vermilion" : "text-paper"
                    }`}
                  >
                    <span className="label !text-[10px] text-ash">0{i + 1}</span>
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-5"
            >
              <a href={`mailto:${site.email}`} className="block font-display text-lg text-paper">
                {site.email}
              </a>
              <div className="flex gap-5">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label text-ash hover:text-paper"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
