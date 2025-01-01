'use client';

import React, {cloneElement, ReactElement, useState} from "react";
import CharSpan from "@/components/antiMagnetEffectText/charSpan";

type AntiMagnetEffectTextProps = {
    children: ReactElement<{ children: string }>;
};

const AntiMagnetEffectText = ({children}: AntiMagnetEffectTextProps) => {

    const text = children.props.children;
    const [enteredIndex, setEnteredIndex] = useState<number|null>(null);

    const parsedChildren = text.split('').map((char, index) => (
        <CharSpan
            key={index}
            char={char}
            index={index}
            enteredIndex={enteredIndex}
            setEnteredIndex={setEnteredIndex}
        />
    ))

    return (
        cloneElement(children, {
            children: parsedChildren as unknown as string,
        })
    );
}

export default AntiMagnetEffectText;