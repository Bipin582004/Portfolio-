# Bipin Upadhyaya — Creator Portfolio

A cinematic, editorial portfolio built with **React + Vite + TypeScript + Tailwind CSS + Framer Motion**.
It is a fully **static site** — no backend, no paid services — so it deploys free on Vercel.

You never need to touch the React components to update your content. Everything you edit lives in
**`src/data/`** and **`public/`**.

---

## 1. Run it on your computer

You need [Node.js](https://nodejs.org) (version 18 or newer — download the "LTS" version).

```bash
npm install        # downloads the dependencies (once)
npm run dev        # starts the site at http://localhost:5173
```

Edit a file, save, and the browser updates by itself.

To check the production build:

```bash
npm run build      # creates the /dist folder
npm run preview    # serves /dist locally so you can test it
```

Optional: `npm run typecheck` runs a strict TypeScript check.

---

## 2. Where to change things

| I want to change…                          | Open this file                    |
| ------------------------------------------ | --------------------------------- |
| Name, email, hero text, About text, contact text | `src/data/site.ts`          |
| Video projects (add / remove / update)     | `src/data/projects.ts`            |
| Instagram / YouTube / LinkedIn links       | `src/data/socialLinks.ts`         |
| Services, "What I create", Process steps   | `src/data/services.ts`            |
| Experience / achievements                  | `src/data/achievements.ts`        |
| Colours and fonts                          | `src/styles/globals.css` (top of file) |

Only change the text **between the quotation marks**. Keep the commas and brackets.

### Images — which folder?

| Image                     | Put it in                      | File name used by the site |
| ------------------------- | ------------------------------ | -------------------------- |
| Your hero portrait        | `public/images/hero/`          | `portrait.webp` and `portrait.jpg` |
| Video thumbnails          | `public/images/projects/`      | any name, e.g. `my-video.jpg` |
| Social share image (WhatsApp/LinkedIn preview) | `public/images/` | `og-image.jpg` (1200×630) |
| Browser tab icon          | `public/`                      | `favicon.svg`              |
| Your own MP4 videos       | `public/videos/`               | any name, e.g. `reel.mp4`  |

**Hero portrait:** your photo is already in place. To swap it, replace both `portrait.webp` and `portrait.jpg`
(square photos work best, about 1100×1100). The photo is blended into the orange gradient. If you use a
cut-out PNG with a transparent background, set `blend: false` in `src/data/site.ts`.

---

## 3. Add your videos

Open `src/data/projects.ts`. The carousel is generated from that list. To add a video, **copy one `{ … }` block**,
paste it below the last one, and edit it.

### A YouTube video

```ts
{
  id: 7,
  title: "My real video title",
  category: "AI & Technology",
  platform: "YouTube",
  thumbnail: "",                       // leave empty = YouTube's own thumbnail is used
  videoType: "youtube",
  videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",   // full link OR just the ID
  description: "One sentence about the video.",
  duration: "08:45",
  orientation: "landscape",            // "portrait" for Shorts / Reels
  metrics: null,
}
```

Note that there is **no** `placeholder: true` line — that is what removes the "Placeholder" tag.

### A Vimeo video

Same as above with `videoType: "vimeo"` and `videoUrl: "https://vimeo.com/123456789"`.

### A direct MP4 file

1. Compress the video first (H.264 MP4, ideally under ~20 MB; use [HandBrake](https://handbrake.fr), it's free).
2. Copy it into `public/videos/`, e.g. `public/videos/reel.mp4`.
3. Use:

```ts
videoType: "mp4",
videoUrl: "/videos/reel.mp4",
```

> **Tip:** Vercel's free plan has size and bandwidth limits. For long or large videos, upload to YouTube or Vimeo
> and use the link — it is faster and free.

### Your own thumbnail

Save a **portrait (3:4)** or any image into `public/images/projects/`, then:
`thumbnail: "/images/projects/my-video.jpg"`. Around 720×1000 px, JPG, under 200 KB is ideal.

### Real numbers only

`metrics` is `null` by default. If you want to show real results, use
`metrics: [{ label: "Views", value: "12K" }]`. Never put numbers you cannot prove.

### Remove / reorder

Delete a block to remove a video. Move blocks up or down to reorder. Add `featured: true` to the one you want
centred when the page loads.

---

## 4. Make the contact form work

The form is honest: it never says "sent" unless a message was truly delivered.

**Option A — works immediately (default).** Leave `formEndpoint: ""` in `src/data/site.ts`. When someone clicks
*Let's talk*, their email app opens with the message pre-filled, addressed to the `email` you set in the same file.

**Option B — real form submissions with Formspree (free tier available).**
1. Create an account at [formspree.io](https://formspree.io) and make a new form.
2. Copy the form URL, e.g. `https://formspree.io/f/abcdwxyz`.
3. Paste it into `formEndpoint` in `src/data/site.ts`.
4. Deploy. Submissions now arrive in your inbox. Check Formspree's current free limits and terms.

---

## 5. Before you launch — checklist

- [ ] `email` in `src/data/site.ts` (currently `hello@your-domain.com`)
- [ ] Social URLs in `src/data/socialLinks.ts` (all say `YOUR_…`)
- [ ] Replace the 6 placeholder projects in `src/data/projects.ts`
- [ ] Replace placeholder thumbnails in `public/images/projects/`
- [ ] Fill in or hide `src/data/achievements.ts` (`enabled: false` hides it)
- [ ] Replace `public/images/og-image.jpg` with your own 1200×630 image
- [ ] In `index.html`, replace every `https://YOUR-DOMAIN.com` with your real address (needed for social previews)
- [ ] Don't add client logos, numbers or awards that aren't real

---

## 6. Deploy on Vercel (free Hobby plan)

1. **Install:** `npm install`
2. **Test locally:** `npm run dev`
3. **Build:** `npm run build` — must finish without errors.
4. **Put the code on GitHub:**
   - Create an empty repository at github.com (e.g. `bipin-portfolio`).
   - In this folder run:
     ```bash
     git init
     git add .
     git commit -m "Initial portfolio"
     git branch -M main
     git remote add origin https://github.com/YOUR-USERNAME/bipin-portfolio.git
     git push -u origin main
     ```
5. **Import into Vercel:** sign in at [vercel.com](https://vercel.com) with GitHub → **Add New… → Project** →
   pick your repository → **Import**.
6. **Build settings** — Vercel detects Vite automatically. Confirm:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
7. **Deploy.** In about a minute you get a `…vercel.app` address.
8. **Custom domain (later):** Project → *Settings → Domains* → add your domain and follow the DNS instructions.
   Then update the `YOUR-DOMAIN.com` lines in `index.html`.

Every time you push a change to GitHub, Vercel redeploys automatically. No `vercel.json` is needed.

---

## 7. What this version does *not* include

There is **no upload dashboard**. Uploading files directly through a live website needs a storage service
and a backend (login, database, file storage), which is outside the free static version. Your workflow is:
host videos on YouTube/Vimeo (or put small MP4s in `public/videos/`), then edit `src/data/projects.ts`.

---

## 8. Accessibility & performance notes

- Animations respect the visitor's "reduce motion" setting.
- Thumbnails are lazy-loaded; video players load **only after a visitor clicks play** (YouTube uses the
  privacy-enhanced `youtube-nocookie.com` domain). The player code itself is code-split.
- Carousel: drag/swipe, arrow buttons, dots, and ← → keys. Modal: `Esc` to close, focus is trapped inside.
- Fonts (Space Grotesk, Manrope, JetBrains Mono) load from Google Fonts.

## Project structure

```
src/
  components/   Navbar, Hero, TrustStrip, About, FeaturedWork, VideoCarousel, ProjectModal,
                Categories, Services, Process, Achievements, Contact, Footer (+ small helpers)
  data/         site.ts · projects.ts · socialLinks.ts · services.ts · achievements.ts   ← you edit these
  hooks/ lib/   small helpers
  styles/       globals.css (design tokens, grain, hero gradient)
public/
  images/hero · images/projects · videos
```
