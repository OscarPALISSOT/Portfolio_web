import React from "react";
import {createDirectus, readItem, rest} from "@directus/sdk";
import WorkType from "@/types/workType";
import AntiMagnetEffectText from "@/components/antiMagnetEffectText/antiMagnetEffectText";
import WorkLink from "@/app/work/[id]/workLink";
import ThumbnailWork from "@/app/work/[id]/thumbnailWork";
import Carrousel from "@/app/work/[id]/carrousel";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

interface WorkProps {
    params: Promise<{ id: string }>
}

async function Work({params}: WorkProps) {

    const id = (await params).id

    const work = await client.request(
        readItem('work', id)
    ) as WorkType;

    return (
        <div className={'min-h-[calc(100vh_-_192px_-_56px_-_32px)] mb-14'}>
            <div className={"md:mx-8 lg:mx-36"}>
                <div className={'mb-8 md:m-0 md:h-[40vh] lg:h-[60vh] flex flex-col md:flex-row md:items-center gap-6'}>
                    <div className={'md:w-1/2 h-full flex flex-col'}>
                        <AntiMagnetEffectText>
                            <h1 className={"mt-8 md:mt-20 lg:mt-24 mb-6 text-2xl md:text-3xl lg:text-4xl"}>{work.title}</h1>
                        </AntiMagnetEffectText>
                        {work.link &&
                            <WorkLink link={work.link}/>
                        }
                    </div>
                    <div
                        className={'md:w-1/2 font-extralight text-base md:text-sm lg:text-lg'}
                        dangerouslySetInnerHTML={{__html: work.description}}
                    />
                </div>
            </div>
            <ThumbnailWork work={work}/>
            <div className={"md:mx-8 lg:mx-36"}>
                <div className={'mb-8 md:m-0 md:h-[40vh] lg:h-[50vh] flex flex-col md:flex-row md:items-center gap-6'}>
                    <div className={'md:w-1/2 h-full flex items-center'}>
                        <Carrousel work={work}/>
                    </div>
                    <div className={'md:w-1/2'}>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;