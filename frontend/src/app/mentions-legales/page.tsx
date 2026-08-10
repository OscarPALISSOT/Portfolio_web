import React from "react";
import { getMentionsLegales } from "@/lib/queries";

async function MentionsLegales() {

    const mentionsLegales = await getMentionsLegales();

    return (
        <div className={'min-h-[calc(100vh_-_225px)] mb-14'}>
            <h1 className={'mt-8 mb-6 text-2xl md:text-3xl lg:text-4xl'}>Mentions légales</h1>
            <div
                className={'prose text-background dark:text-text font-vazirmatn font-extralight text-base md:text-sm lg:text-lg prose-h1:font-vazirmatn prose-h1:font-extralight prose-h1:text-background dark:prose-h1:text-text prose-h1:mt-8 prose-h1:mb-4 prose-h1:text-xl prose-h1:md:text-2xl prose-h1:lg:text-3xl prose-a:font-extralight prose-a:text-background dark:prose-a:text-text'}
                dangerouslySetInnerHTML={{ __html: mentionsLegales.mentions }}
            />
        </div>
    );
}

export default MentionsLegales;