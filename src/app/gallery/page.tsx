import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import GalleryGrid from '@/components/GalleryGrid';
import ContactCTA from '@/components/home/ContactCTA';
import { projects } from '@/data/projects';
import { getProjectMedia } from '@/lib/media';
import { galleryPageContent } from '@/data/gallery';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'A visual record of OD Construction\u2019s sites \u2014 from foundation to facade, across Mumbai and Thane.',
};

export default function GalleryPage() {
  const images = projects.flatMap((project) => {
    const media = getProjectMedia(project);
    const all = [media.heroImage, ...media.gallery].filter(Boolean) as string[];
    return all.map((src, i) => ({
      src,
      caption: i === 0 ? project.title : `${project.title} \u2014 site photo`,
      category: project.category,
      status: project.status,
      projectSlug: project.slug,
      projectTitle: project.title,
    }));
  });

  return (
    <>
      <PageHero
        eyebrow={galleryPageContent.eyebrow}
        title={galleryPageContent.title}
        description={galleryPageContent.description}
      />
      <section className="bg-white py-24 dark:bg-midnight-950 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <GalleryGrid images={images} />
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
