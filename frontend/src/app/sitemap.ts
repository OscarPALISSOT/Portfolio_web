import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: 'https://oscarpalissot.fr',
            lastModified: new Date()
        },
    ]
}