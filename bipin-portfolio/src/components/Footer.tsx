import { ArrowUp } from "lucide-react";
import { site } from "../data/site";
import { socialLinks } from "../data/socialLinks";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink pb-8 pt-16">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-display text-3xl font-bold uppercase leading-none tracking-tight sm:text-4xl">
              {site.name}
            </p>
            <p className="mt-4 max-w-sm text-[15px] text-paper/60">{site.footer.tagline}</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <p className="label text-ash">Navigate</p>
            <ul className="mt-4 space-y-2">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-underline text-[15px] text-paper/85 hover:text-paper">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="label text-ash">Follow</p>
            <ul className="mt-4 space-y-2">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-[15px] text-paper/85 hover:text-paper"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-6">
          <p className="label text-ash">
            © {new Date().getFullYear()} {site.name}
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper/70 transition-colors hover:border-vermilion hover:bg-vermilion hover:text-white"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
