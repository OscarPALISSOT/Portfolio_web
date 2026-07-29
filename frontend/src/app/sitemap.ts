import type { MetadataRoute } from 'next'
import { createDirectus, readItems, rest } from "@directus/sdk";
import WorkBlockType from "@/types/workBlockType";

// say to next js to not pre-generate this route at build
export const dynamic = 'force-dynamic';

const client = createDirectus(process.env.NEXT_DIRECTUS_INTERNAL_URL!).with(rest());

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    try {
        const workBlock = await client.request(
            readItems('work_block', {
                fields: ['works', {
                    works: ['id', {}],
                }],
            })
        ) as unknown as WorkBlockType;

        return [
            {
                url: 'https://oscarpalissot.fr',
                lastModified: new Date()
            },
            ...workBlock.works.map(work => ({
                url: 'https://oscarpalissot.fr/work/' + work.id,
                lastModified: new Date()
            }))
        ];
    } catch (error) {
        console.error('Sitemap generation failed, returning minimal fallback:', error);
        return [
            {
                url: 'https://oscarpalissot.fr',
                lastModified: new Date()
            }
        ];
    }
}