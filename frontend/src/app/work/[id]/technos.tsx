import TechnoType from "@/types/technoType";
import Image from "next/image";

interface TechnosProps {
    technos: TechnoType[];
}

const Technos = ({technos}: TechnosProps) => {
    return (
        <div className={'w-full md:w-2/3 flex flex-wrap border-[0.5px] border-background dark:border-text'}>
            {technos.map((techno: TechnoType, index) => (
                <div
                    key={index}
                    className={'flex-grow flex flex-row justify-center items-center gap-2 border-[0.5px] border-background dark:border-text px-2 py-1'}
                >
                    <div className={'h-[32px] lg:h-[40px]'}>
                        <Image
                            src={process.env.NEXT_PUBLIC_ASSETS_URL + techno.techno_id.icon}
                            alt={techno.techno_id.name}
                            width={40}
                            height={40}
                            className={'h-full w-auto object-cover dark:invert'}
                        />
                    </div>
                    {techno.techno_id.name}
                </div>
            ))}
        </div>
    )
}

export default Technos;