import { getBaseUrl } from '@/lib/helpers'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${getBaseUrl()}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1
    }
    // Add more URLs here
  ]
}
