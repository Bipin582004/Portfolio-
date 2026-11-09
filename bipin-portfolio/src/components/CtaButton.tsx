import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function ArrowCircle({ tone = "orange", className = "" }: { tone?: "orange" | "dark"; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-45 ${
        tone === "orange" ? "bg-vermilion text-white" : "bg-ink text-paper"
      } ${className}`}
    >
      <ArrowRight size={16} strokeWidth={2.25} />
    </span>
  );
}

interface Props {
  href: string;
  children: ReactNode;
  variant?: "light" | "outline" | "orange";
  className?: string;
  onClick?: () => void;
}

const base =
  "group inline-flex items-center gap-4 rounded-full font-display text-[12.5px] font-semibold uppercase tracking-[0.1em] transition-colors duration-300";

export default function CtaButton({ href, children, variant = "light", className = "", onClick }: Props) {
  const styles = {
    light: "bg-paper py-1.5 pl-6 pr-1.5 text-ink hover:bg-white",
    orange: "bg-vermilion py-1.5 pl-6 pr-1.5 text-white hover:bg-ember",
    outline: "border border-paper/45 px-6 py-[15px] text-paper hover:border-paper hover:bg-paper/10",
  }[variant];

  return (
    <a href={href} onClick={onClick} className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
      {variant === "light" && <ArrowCircle />}
      {variant === "orange" && <ArrowCircle tone="dark" />}
    </a>
  );
}
