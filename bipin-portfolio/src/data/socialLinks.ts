/**
 * SOCIAL LINKS — replace the placeholder URLs and handles with your own.
 * Delete a block to remove that platform everywhere on the site.
 */
export interface SocialLink {
  label: string;
  url: string;
  handle: string;
}

export const socialLinks: SocialLink[] = [
  { label: "Instagram", url: "https://instagram.com/YOUR_HANDLE", handle: "@your_handle" },
  { label: "YouTube", url: "https://youtube.com/@YOUR_CHANNEL", handle: "@your_channel" },
  { label: "LinkedIn", url: "https://linkedin.com/in/YOUR_PROFILE", handle: "in/your-profile" },
];
