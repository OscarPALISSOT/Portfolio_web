import React, {FC, ReactElement, cloneElement, isValidElement} from 'react';

type TextParserProps = {
    children: ReactElement<{ children: string }>;
};

const TextParser: FC<TextParserProps> = ({children}) => {
    if (!isValidElement(children)) {
        console.error('Children is not a valid element');
        return null;
    }

    const text = children.props.children;

    const parsedChildren = text.split('').map((char, index) => (
        <span key={index} style={{display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : undefined}}>
            {char}
        </span>
    ));

    return cloneElement(children, {
        children: parsedChildren as unknown as string,
    });
};

export default TextParser;