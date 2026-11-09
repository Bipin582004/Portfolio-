/**
 * SITE CONTENT — edit the text between the quotes. No React knowledge needed.
 * After saving, the browser refreshes automatically when running `npm run dev`.
 */
export const site = {
  name: "Bipin Upadhyaya",
  brandMark: "BIPIN.",

  /** Your public email. Used on the contact section and as the mailto fallback. */
  email: "hello@your-domain.com", // ← REPLACE

  /**
   * CONTACT FORM
   * Leave empty ("") to use the mailto fallback (opens the visitor's email app).
   * Or paste a free Formspree endpoint, e.g. "https://formspree.io/f/abcdwxyz"
   * (see README → "Make the contact form work").
   */
  formEndpoint: "",

  hero: {
    eyebrow: "HEY, I'M BIPIN.",
    // Each string is one line of the big headline.
    headlineLines: ["Turning Ideas", "Into Stories", "That Matter."],
    description:
      "I create meaningful digital content around technology, AI, creativity, and real-world problems — making complicated ideas easier to understand.",
    tagline: "CREATIVITY MEETS CLARITY.",
    taglineBody:
      "From research to storytelling, I turn information into content people actually connect with.",
    primaryCta: { label: "EXPLORE MY WORK", href: "#work" },
    secondaryCta: { label: "LET'S WORK TOGETHER", href: "#contact" },
    capabilities: [
      "Content Strategy",
      "Video Storytelling",
      "AI & Tech Content",
      "Digital Growth",
    ],
    portrait: {
      // Replace these two files (same names) in public/images/hero/ — or change the paths.
      webp: "/images/hero/portrait.webp",
      jpg: "/images/hero/portrait.jpg",
      alt: "Portrait of Bipin Upadhyaya",
      // true  = photo is blended into the orange gradient (best for photos with a plain/grey wall)
      // false = photo shows normally (use for a cut-out PNG with transparent background)
      blend: true,
      // Which part of the photo stays in focus when cropped: "x% y%"
      objectPosition: "50% 20%",
    },
  },

  trust: {
    heading: "BUILT ON CREATIVITY. DRIVEN BY EXECUTION.",
    leadIn: "Open to collaborating with",
    // These are CATEGORIES of people I'd like to work with — not client logos.
    categories: [
      "Brands",
      "Agencies",
      "Educational Institutions",
      "Technology Companies",
      "Study Abroad Consultancies",
    ],
  },

  about: {
    eyebrow: "BEHIND THE CONTENT.",
    headline: "Making Complex Ideas Feel Simple.",
    paragraphs: [
      "I'm Bipin, a content creator passionate about technology, digital creativity, and storytelling.",
      "I enjoy exploring tools, understanding complicated topics, experimenting with new ideas, and presenting useful information in a simple, relatable way.",
      "My approach combines research, creativity, experimentation, and practical execution.",
    ],
    belief:
      "I believe great content is not just about getting attention. It's about creating something people remember, understand, and find useful.",
    languages: "Hindi / Hinglish · Nepali · English",
    pillars: [
      { title: "Research First", text: "Understanding the subject before communicating it." },
      { title: "Storytelling Matters", text: "Turning information into engaging narratives." },
      { title: "Practical Creativity", text: "Creating content that delivers real value." },
    ],
  },

  work: {
    eyebrow: "FEATURED WORK",
    headline: "Stories worth pressing play on.",
    intro:
      "Drag, swipe or use the arrows to browse. Tap the centre card to watch.",
  },

  contact: {
    headline: "HAVE A STORY WORTH TELLING?",
    text: "Whether you're a brand, agency, educational institution, or creative team, let's explore what we can create together.",
    cta: "LET'S TALK.",
    collaborationTypes: [
      "Brand collaboration",
      "Agency / content partnership",
      "Educational content",
      "Study-abroad / consultancy content",
      "Short-form video",
      "Long-form video",
      "Something else",
    ],
  },

  footer: {
    tagline: "Creating with curiosity. Communicating with clarity.",
  },
};
