import {createDirectus, readItems, rest} from "@directus/sdk";
import Hero from "@/components/hero";
import Section from "@/components/section";
import WorkBlock from "@/components/works/workBlock";
import About from "@/components/about";
import Contact from "@/components/contact/contact";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

export default async function Home() {

    const about = await client.request(
        readItems('about', {
            fields: ['*', {}],
        })
    ) as unknown as AboutType;

    const workBlock = await client.request(
        readItems('work_block', {
            fields: ['*', {
                works: ['*', {}],
            }],
        })
    ) as unknown as WorkBlockType;

    const contactBlock = await client.request(
        readItems('contact', {
            fields: ['*', {}],
        })
    ) as unknown as ContactType;

    return (
        <div className={"md:mx-8 lg:mx-36"}>
            <Hero aboutBlock={about}/>
            <Section id={workBlock.link}>
                <WorkBlock workBlock={workBlock}/>
            </Section>
            <Section id={about.link}>
                <About about={about}/>
            </Section>
            <Section id={contactBlock.link}>
                <Contact contact={contactBlock}/>
            </Section>
        </div>
    );
}