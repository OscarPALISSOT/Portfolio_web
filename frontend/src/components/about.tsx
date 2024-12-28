import AboutType from "@/types/aboutType";

interface AboutProps {
    about: AboutType;
}

const About = ({about}: AboutProps) => {
    return (
        <div className={'mb-14'}>
            <h1 className={"mb-4 text-xl md:text-2xl lg:text-3xl"}>{about.link}</h1>
            <div
                className={'font-extralight text-base md:text-sm lg:text-lg'}
                dangerouslySetInnerHTML={{__html: about.description}}
            />
        </div>
    )
}

export default About;