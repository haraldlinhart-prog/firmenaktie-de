import { MetadataRoute } from 'next'

const BASE_URL = 'https://firmenaktie.de'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${BASE_URL}/aktien`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${BASE_URL}/registry`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${BASE_URL}/stille-beteiligung`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${BASE_URL}/datenschutz`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${BASE_URL}/impressum`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
  ]
}
