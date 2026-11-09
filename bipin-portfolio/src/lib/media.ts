import type { Project } from "../data/projects";

/** Accepts a bare 11-char ID or any common YouTube link (watch, youtu.be, shorts, embed). */
export function extractYouTubeId(input: string): string {
  const m = input.match(/(?:youtu\.be\/|v=|embed\/|shorts\/|live\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : input.trim();
}

/** Accepts a numeric ID or a vimeo.com link. */
export function extractVimeoId(input: string): string {
  const m = input.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return m ? m[1] : input.trim();
}

/** True while an entry still holds the template placeholder values. */
export function isPlaceholderVideo(p: Pick<Project, "videoUrl">): boolean {
  return !p.videoUrl || /YOUR[_-]|PLACEHOLDER/i.test(p.videoUrl);
}

/** Uses your thumbnail; falls back to the YouTube thumbnail; then to a neutral placeholder. */
export function resolveThumbnail(p: Project): string {
  if (p.thumbnail) return p.thumbnail;
  if (p.videoType === "youtube" && !isPlaceholderVideo(p)) {
    return `https://i.ytimg.com/vi/${extractYouTubeId(p.videoUrl)}/hqdefault.jpg`;
  }
  return "/images/projects/placeholder.jpg";
}
