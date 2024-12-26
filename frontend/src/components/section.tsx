import React, {ReactNode} from "react";

interface SectionProps {
    children: ReactNode
    id: string
}

export default function Section({children, id}: SectionProps) {
    return (
        <section className={'w-full h-fit'} id={id}>
            {children}
        </section>
    )
}
