/**
 * EXPERIENCE / SELECTED ACHIEVEMENTS
 *
 * Everything below is placeholder text. Replace it with REAL items only.
 * - Leave `date` or `org` as "" and that part is simply hidden.
 * - To hide the whole section, set `enabled: false`.
 * - To add an item, copy a block. To remove one, delete it.
 */
export interface Achievement {
  type: string;
  title: string;
  org: string;
  date: string;
  description: string;
}

export const achievements = {
  enabled: true,
  eyebrow: "SELECTED HIGHLIGHTS",
  headline: "Projects, experiments & milestones.",
  items: [
    {
      type: "Content project",
      title: "Your content project title",
      org: "",
      date: "",
      description: "Placeholder — describe what you made, who it was for and what you learned.",
    },
    {
      type: "Technical project",
      title: "Your technical project title",
      org: "",
      date: "",
      description: "Placeholder — a tool, automation or build you are proud of.",
    },
    {
      type: "Creative experiment",
      title: "Your creative experiment",
      org: "",
      date: "",
      description: "Placeholder — a format or idea you tested and what came out of it.",
    },
    {
      type: "Certificate / recognition",
      title: "Your certificate or recognition",
      org: "",
      date: "",
      description: "Placeholder — add only real certificates, courses or recognitions.",
    },
  ] as Achievement[],
};
