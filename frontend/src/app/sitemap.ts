import type { MetadataRoute } from 'next'
import {createDirectus, readItems, rest} from "@directus/sdk";
import WorkBlockType from "@/types/workBlockType";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

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
        ...workBlock.works.map(work =>({
            url: 'https://oscarpalissot.fr/work/' + work.id,
            lastModified: new Date()
        }))
    ]
}