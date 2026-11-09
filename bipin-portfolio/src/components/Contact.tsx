import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { site } from "../data/site";
import { socialLinks } from "../data/socialLinks";
import Reveal from "./Reveal";
import { ArrowCircle } from "./CtaButton";
import Magnetic from "./Magnetic";

type Status = "idle" | "sending" | "success" | "error" | "mailto";

const field =
  "w-full border-0 border-b border-paper/25 bg-transparent px-0 py-3 text-[15px] text-paper placeholder:text-paper/35 transition-colors focus:border-vermilion focus:outline-none focus:ring-0";

export default function Contact() {
  const { contact } = site;
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never fill this hidden field.
    if (data.get("_gotcha")) return;

    const values = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      type: String(data.get("type") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    // A) Real submission through a form service (Formspree etc.) if an endpoint is set in site.ts
    if (site.formEndpoint) {
      setStatus("sending");
      try {
        const res = await fetch(site.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (res.ok) {
          setStatus("success");
          form.reset();
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
      return;
    }

    // B) No endpoint configured → open the visitor's email app with the message pre-filled.
    const subject = `Collaboration enquiry — ${values.type || "General"}`;
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Organization: ${values.company || "-"}`,
      `Type: ${values.type || "-"}`,
      "",
      values.message,
    ].join("\n");
    setStatus("mailto");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="contact-glow grain relative overflow-hidden section-y">
      <div className="container-x relative z-10">
        <Reveal>
          <p className="label text-vermilion">{contact.cta}</p>
          <h2 id="contact-title" className="display-xl mt-5 max-w-5xl uppercase">
            {contact.headline}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/70">{contact.text}</p>
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-12">
          {/* links */}
          <Reveal delay={0.1} className="lg:col-span-4">
            <p className="label text-ash">Email</p>
            <Magnetic className="mt-2 inline-block">
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-3 font-display text-xl font-medium sm:text-2xl"
              >
                <span className="link-underline">{site.email}</span>
                <ArrowCircle className="!h-8 !w-8" />
              </a>
            </Magnetic>

            <p className="label mt-10 text-ash">Elsewhere</p>
            <ul className="mt-3 space-y-1">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-b border-white/10 py-3 font-display text-lg transition-colors hover:text-vermilion"
                  >
                    <span>
                      {s.label} <span className="ml-2 font-body text-sm text-paper/45">{s.handle}</span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* form */}
          <Reveal delay={0.2} className="lg:col-span-7 lg:col-start-6">
            <form onSubmit={onSubmit} className="space-y-7" noValidate={false}>
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="label text-ash">
                    Name
                  </label>
                  <input id="name" name="name" required autoComplete="name" placeholder="Your name" className={field} />
                </div>
                <div>
                  <label htmlFor="email" className="label text-ash">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className={field}
                  />
                </div>
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className="label text-ash">
                    Company / Organization
                  </label>
                  <input id="company" name="company" autoComplete="organization" placeholder="Optional" className={field} />
                </div>
                <div>
                  <label htmlFor="type" className="label text-ash">
                    Type of collaboration
                  </label>
                  <select id="type" name="type" defaultValue="" className={`${field} appearance-none`}>
                    <option value="" className="bg-ink">
                      Select one
                    </option>
                    {contact.collaborationTypes.map((t) => (
                      <option key={t} value={t} className="bg-ink">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="label text-ash">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your idea, audience and timeline."
                  className={`${field} resize-none`}
                />
              </div>

              {/* honeypot */}
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

              <div className="flex flex-wrap items-center gap-5 pt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex items-center gap-4 rounded-full bg-vermilion py-1.5 pl-7 pr-1.5 font-display text-[12.5px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-ember disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : contact.cta}
                  <ArrowCircle tone="dark" />
                </button>

                <p role="status" aria-live="polite" className="max-w-sm text-sm leading-snug">
                  {status === "success" && <span className="text-paper">Thanks — your message was sent. I'll reply soon.</span>}
                  {status === "error" && (
                    <span className="text-vermilion">
                      Something went wrong sending the form. Please email me directly at {site.email}.
                    </span>
                  )}
                  {status === "mailto" && (
                    <span className="text-paper/70">
                      Opening your email app… if nothing opens, write to {site.email}.
                    </span>
                  )}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
