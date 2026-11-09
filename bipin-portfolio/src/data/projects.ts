/**
 * VIDEO PROJECTS — the carousel is built automatically from this list.
 *
 * To ADD a video:    copy one { ... } block, paste it, change the values.
 * To REMOVE a video: delete its block.
 * To REORDER:        move blocks up/down.
 *
 * videoType:
 *   "youtube"  → videoUrl = the video ID (or the full YouTube link — both work)
 *   "vimeo"    → videoUrl = the numeric ID (or the full Vimeo link)
 *   "mp4"      → videoUrl = path of a file in public/videos, e.g. "/videos/my-reel.mp4"
 *
 * thumbnail:
 *   Put your image in public/images/projects/ and write "/images/projects/your-file.jpg".
 *   For YouTube videos you can leave thumbnail as "" and the YouTube thumbnail is used.
 *
 * orientation: "landscape" (normal 16:9) or "portrait" (Reels / Shorts, 9:16).
 * featured:    true on the video you want centred when the page loads.
 * metrics:     null, or e.g. [{ label: "Views", value: "12K" }] — ONLY real numbers.
 * placeholder: delete this line (or set false) once the entry is your real project.
 */
export type VideoType = "youtube" | "vimeo" | "mp4";

export interface Project {
  id: number | string;
  title: string;
  category: string;
  platform: string;
  thumbnail?: string;
  videoType: VideoType;
  videoUrl: string;
  description: string;
  duration?: string;
  featured?: boolean;
  orientation?: "landscape" | "portrait";
  metrics?: { label: string; value: string }[] | null;
  placeholder?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Your Video Title — AI Tools Explained",
    category: "AI & Technology",
    platform: "YouTube",
    thumbnail: "/images/projects/project-01.jpg",
    videoType: "youtube",
    videoUrl: "YOUR_YOUTUBE_VIDEO_ID",
    description: "Placeholder: a practical walkthrough of an AI tool or workflow.",
    duration: "08:45",
    orientation: "landscape",
    metrics: null,
    placeholder: true,
  },
  {
    id: 2,
    title: "Your Video Title — Content Workflow",
    category: "Content Creation",
    platform: "YouTube",
    thumbnail: "/images/projects/project-02.jpg",
    videoType: "youtube",
    videoUrl: "YOUR_YOUTUBE_VIDEO_ID",
    description: "Placeholder: how a video goes from idea to final edit.",
    duration: "12:10",
    featured: true,
    orientation: "landscape",
    metrics: null,
    placeholder: true,
  },
  {
    id: 3,
    title: "Your Short — Quick Tech Tip",
    category: "AI & Technology",
    platform: "YouTube Shorts",
    thumbnail: "/images/projects/project-03.jpg",
    videoType: "youtube",
    videoUrl: "YOUR_YOUTUBE_SHORT_ID",
    description: "Placeholder: a 60-second short that explains one idea clearly.",
    duration: "00:58",
    orientation: "portrait",
    metrics: null,
    placeholder: true,
  },
  {
    id: 4,
    title: "Your Video Title — Growth Strategy",
    category: "Digital Growth",
    platform: "YouTube",
    thumbnail: "/images/projects/project-04.jpg",
    videoType: "youtube",
    videoUrl: "YOUR_YOUTUBE_VIDEO_ID",
    description: "Placeholder: lessons on growing a channel or social presence.",
    duration: "10:30",
    orientation: "landscape",
    metrics: null,
    placeholder: true,
  },
  {
    id: 5,
    title: "Your Video Title — Study & Career Guide",
    category: "Education & Opportunities",
    platform: "Vimeo",
    thumbnail: "/images/projects/project-05.jpg",
    videoType: "vimeo",
    videoUrl: "YOUR_VIMEO_ID",
    description: "Placeholder: practical guidance on studying or working abroad.",
    duration: "14:20",
    orientation: "landscape",
    metrics: null,
    placeholder: true,
  },
  {
    id: 6,
    title: "Your Reel — Direct MP4 Example",
    category: "Content Creation",
    platform: "Instagram Reel",
    thumbnail: "/images/projects/project-06.jpg",
    videoType: "mp4",
    videoUrl: "/videos/your-video.mp4",
    description: "Placeholder: a video file you host yourself in public/videos.",
    duration: "00:45",
    orientation: "portrait",
    metrics: null,
    placeholder: true,
  },
];
