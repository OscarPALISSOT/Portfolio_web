'use client';

import React, {cloneElement, isValidElement, ReactElement, useState} from "react";

type MagnetEffectTextProps = {
    children: ReactElement<{ children: string }>;
};

const MagnetEffectText = ({children}: MagnetEffectTextProps) => {

    if (!isValidElement(children)) {
        console.error('Children is not a valid element');
        return null;
    }

    const text = children.props.children;
    const [isEnterIndex, setEnterIndex] = useState<number|null>(null);

    const parsedChildren = text.split('').map((char, index) => (
        <span
            key={index}
            onMouseEnter={() => setEnterIndex(index)}
            onMouseLeave={() => setEnterIndex(null)}
            className={'absolute inline-block px-10 m-0 duration-150 ease-in-out'}
            style={{left: `${isEnterIndex && isEnterIndex <= index ? index * 36 + 40 : index * 36}px`, whiteSpace: char === ' ' ? 'pre' : undefined}}
        >
                {char}
            </span>
    ))


    return (
        <div className={'relative -translate-x-10'}>
            {cloneElement(children, {
                children: parsedChildren as unknown as string,
            })}
        </div>
    );
}

export default MagnetEffectText;