import fs from 'fs';
import path from 'path';
import type { Project } from '@/data/projects';

const IMAGE_EXT = ['.jpg', '.jpeg', '.png', '.webp'];
const VIDEO_EXT = ['.mp4', '.webm'];

/**
 * Resolves a project's media for rendering.
 *
 * - `heroImage` always comes from the project's `heroImage` field in
 *   /data/projects.ts.
 * - `gallery` uses the project's explicit `galleryImages` list if provided;
 *   otherwise it auto-scans `public/projects/<slug>/` and uses every image
 *   in that folder except the hero image. Either way, adding a photo to the
 *   folder is enough — you only touch `projects.ts` if you want to control
 *   the order or leave one out.
 * - `videos` auto-scans `public/videos/projects/<slug>/` (optional folder;
 *   the hero video, if any, should be named `hero-01.mp4`).
 */
export function getProjectMedia(project: Project) {
  const { slug, heroImage, galleryImages, video } = project;
  const imageDir = path.join(process.cwd(), 'public', 'projects', slug);
  const videoDir = path.join(process.cwd(), 'public', 'videos', 'projects', slug);

  const imageFiles = safeList(imageDir).filter((f) => IMAGE_EXT.includes(path.extname(f).toLowerCase()));
  const videoFiles = safeList(videoDir).filter((f) => VIDEO_EXT.includes(path.extname(f).toLowerCase()));

  const galleryFilenames =
    galleryImages && galleryImages.length > 0
      ? galleryImages
      : imageFiles.filter((f) => f !== heroImage).sort();

  const heroVideoFile = video ?? videoFiles.find((f) => f.toLowerCase().startsWith('hero'));
  const galleryVideoFiles = videoFiles.filter((f) => f !== heroVideoFile).sort();

  return {
    heroImage: imageFiles.includes(heroImage) ? `/projects/${slug}/${heroImage}` : null,
    gallery: galleryFilenames.map((f) => `/projects/${slug}/${f}`),
    heroVideo: heroVideoFile && videoFiles.includes(heroVideoFile) ? `/videos/projects/${slug}/${heroVideoFile}` : null,
    videos: galleryVideoFiles.map((f) => `/videos/projects/${slug}/${f}`),
  };
}

function safeList(dir: string): string[] {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
}
