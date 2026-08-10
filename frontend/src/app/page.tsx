import Hero from "@/components/hero";
import Section from "@/components/section";
import WorkBlock from "@/components/works/workBlock";
import About from "@/components/about";
import Contact from "@/components/contact/contact";
import { getAbout, getContact, getWorkBlock } from "@/lib/queries";


export default async function Home() {

  const [about, workBlock, contactBlock] = await Promise.all([
    getAbout(),
    getWorkBlock(),
    getContact(),
  ]);

  return (
    <div className={"md:mx-8 lg:mx-36"}>
      <Hero aboutBlock={about} />
      <Section id={workBlock.link}>
        <WorkBlock workBlock={workBlock} />
      </Section>
      <Section id={about.link}>
        <About about={about} />
      </Section>
      <Section id={contactBlock.link}>
        <Contact contact={contactBlock} />
      </Section>
    </div>
  );
}