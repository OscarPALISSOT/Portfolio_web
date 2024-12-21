import {createDirectus, readItems, rest} from "@directus/sdk";
import Hero from "@/components/hero";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

export default async function Home() {

  const about = await client.request(
      readItems('about', {
        fields: ['*', {}],
      })
  ) as unknown as AboutType;

  return (
      <>
          <Hero aboutBlock={about}/>
      </>
  );
}
