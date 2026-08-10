import type { MetadataRoute } from 'next'
import { getWorkBlock } from '@/lib/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const workBlock = await getWorkBlock();

  return [
    { url: 'https://oscarpalissot.fr', lastModified: new Date() },
    ...(workBlock.works ?? []).map(work => ({
      url: 'https://oscarpalissot.fr/work/' + work.id,
      lastModified: new Date()
    }))
  ];
}