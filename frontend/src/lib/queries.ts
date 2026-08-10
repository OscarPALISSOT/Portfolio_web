import { readItem, readItems } from "@directus/sdk";
import { client, getCachedRequest } from "@/lib/directus";
import AboutType, { defaultAbout } from "@/types/aboutType";
import WorkBlockType, { defaultWorkBlock } from "@/types/workBlockType";
import ContactType, { defaultContact } from "@/types/contactType";
import MentionsLegalesType, { defaultMentionsLegales } from "@/types/mentionsLegalesType";
import WorkType from "@/types/workType";

export const getAbout = getCachedRequest<[], AboutType>(
  ['about'],
  () => client.request<AboutType>(readItems('about', { fields: ['*', {}] })),
  defaultAbout
);

export const getWorkBlock = getCachedRequest<[], WorkBlockType>(
  ['work_block'],
  () => client.request<WorkBlockType>(readItems('work_block', {
    fields: ['*', {
      works: ['*', {
        technos: ['*', {
          techno_id: ['*', {}]
        }]
      }]
    }]
  })),
  defaultWorkBlock
);

export const getContact = getCachedRequest<[], ContactType>(
  ['contact'],
  () => client.request<ContactType>(readItems('contact', { fields: ['*', {}] })),
  defaultContact
);

export const getWorkById = getCachedRequest<[string], WorkType | null>(
  ['work-by-id'],
  (id: string) => client.request<WorkType>(readItem('work', id, {
    fields: ['*', {
      technos: ['*', {
        techno_id: ['*', {}]
      }]
    }]
  })),
  null
);

export const getMentionsLegales = getCachedRequest<[], MentionsLegalesType>(
  ['mentions_legales'],
  () => client.request<MentionsLegalesType>(readItems('mentions_legales', { fields: ['*', {}] })),
  defaultMentionsLegales
);