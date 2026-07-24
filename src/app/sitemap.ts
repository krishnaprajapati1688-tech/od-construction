import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://odconstruction.in';
  const routes = [
    '',
    '/about',
    '/services',
    '/projects/completed',
    '/projects/ongoing',
    '/gallery',
    '/machinery',
    '/clients',
    '/careers',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }));
}
