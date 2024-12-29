import AboutType from "@/types/aboutType";
import TextParser from "@/components/textParser";

interface HeroProps {
    aboutBlock: AboutType
}

const Hero = ({aboutBlock}: HeroProps) => {
    return (
        <div className={"mt-16 md:mt-24"}>
            <TextParser>
                <h1 className={"font-vazirmatn text-5xl md:text-7xl lg:text-8xl font-normal mb-3 md:mb-3"}>{aboutBlock.title}</h1>
            </TextParser>
            <h1 className={"text-3xl md:text-5xl lg:text-6xl font-extralight"}>{aboutBlock.subtitle}</h1>
        </div>
    )
}

export default Hero;