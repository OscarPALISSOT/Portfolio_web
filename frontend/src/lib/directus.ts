import { createDirectus, rest } from "@directus/sdk";
import { unstable_cache } from "next/cache";

export const client = createDirectus(process.env.NEXT_DIRECTUS_INTERNAL_URL!).with(rest());

export function getCachedRequest<Args extends unknown[], T>(
  keyParts: string[],
  queryFn: (...args: Args) => Promise<T>,
  fallback: T,
  revalidate: number = 3600
) {
  return unstable_cache(
    async (...args: Args): Promise<T> => {
      try {
        return await queryFn(...args);
      } catch (error) {
        console.error(`Directus request failed [${keyParts.join(':')}]:`, error);
        return fallback;
      }
    },
    keyParts,
    { revalidate }
  );
}